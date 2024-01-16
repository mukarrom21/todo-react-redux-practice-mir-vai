import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center font-semibold text-3xl my-10">My Todo</h1>
        <TodoContainer />
      </div>
    </Container>
  );
};

export default Todo;
