import { useAddTodoMutation, useUpdateTodoMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TodoModal = ({ data }) => {
  const [title, setTitle] = useState(data.title || "");
  const [description, setDescription] = useState(data.description || "");
  const [priority, setPriority] = useState(data.priority || "low");
  // const dispatch = useAppDispatch();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  // console.log({ data, isLoading, isError, isSuccess });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      title: title,
      description: description,
      isCompleted: false,
      priority: priority,
    };

    if (!data._id) {
      addTodo(taskDetails);
    } else {
      updateTodo({ id: data._id, data: taskDetails });
    }

    // dispatch(addTodo(taskDetails));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        {!data._id ? (
          <Button className="bg-primary-gradient text-xl font-semibold">
            Add Task
          </Button>
        ) : (
          <Button className="bg-[#5c53fe]">
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ToDo</DialogTitle>
          <DialogDescription>
            Want to add new task that you want to finish on time? Write down
            here:
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Task title
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
                value={title}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Task description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                value={description}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Task Priority
              </Label>
              <Select
                defaultValue={priority}
                onValueChange={(value) => setPriority(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <div>
                <Button type="submit">Save the task</Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
