export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export interface ITodoFilterComponent {
  priority: string; // Replace with the actual type of your state
  setPriority: React.Dispatch<React.SetStateAction<string>>; // Replace with the actual type of your state
}
