import { ITodo } from "@/interface/todo.interface";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { data, isLoading } = useGetTodosQuery(priority);
  // const { todos } = useAppSelector((state) => state.todos);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const todos = data.data;
  return (
    <div>
      <div className="flex justify-between mb-5">
        <TodoModal data={{}} />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full rounded-xl p-[5px]">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md">
          <p className="text-2xl font-bold">There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((item: ITodo) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
