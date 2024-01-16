import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/todos",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),

    // Add new task
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/todos",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    // Update task by id
    updateTodo: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/todos/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    // delete task by id
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/todos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
