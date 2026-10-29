export type Todo = {
    id: number;
    text: string;
    done: boolean
}
export function TodoList({ todos }: { todos: Todo[] }) {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            {todo.done ? '(Done)' : ''}
          </li>
        ))}
      </ul>
    );
}
