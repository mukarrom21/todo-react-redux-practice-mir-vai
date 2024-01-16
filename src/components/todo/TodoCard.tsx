import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { Button } from "../ui/button";
import TodoModal from "./TodoModal";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};
const TodoCard = ({
  title,
  _id,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const handleToggleComplete = () => {
    updateTodo({
      id: _id,
      data: {
        isCompleted: !isCompleted,
      },
    });
    // dispatch(toggleComplete(id));
  };
  return (
    <div className="bg-white rounded-md flex items-center p-3 border">
      <div className="flex-[2] flex gap-4">
        <input
          onChange={handleToggleComplete}
          checked={isCompleted}
          type="checkbox"
          name=""
          id=""
        />
        <p className="font-semibold">{title}</p>
      </div>
      {/* <p>Time</p> */}
      <div className="flex-[5]">
        <p>{description}</p>
      </div>
      <div className="flex flex-1 justify-center items-center gap-2">
        <div
          className={`size-2 rounded-xl ${
            priority === "high" ? "bg-red-500" : null
          } ${priority === "medium" ? "bg-yellow-500" : null} ${
            priority === "low" ? "bg-green-500" : null
          }`}
        ></div>
        <div>{priority}</div>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <div className="space-x-5">
        <Button onClick={() => deleteTodo(_id)} className="bg-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <TodoModal data={{ _id, title, description, priority }} />
      </div>
    </div>
  );
};

export default TodoCard;
