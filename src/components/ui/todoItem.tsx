import { FINISH, TODO_CONTENT, TODO_TITLE, UNFINISH } from "@/constant"
import UpdateButton from "./updateButton"
import DeleteButton from "./deleteButton"
import { Todo } from "@/types"

interface TodoItemProps {
  todo: Todo;
  index: number;
  onDeleteTodo: (index:number)=>void;
}

const TodoItem: React.FC<TodoItemProps> = ({ index, todo, onDeleteTodo }) => {
  const handleDeleteButtonClick = () => {
    onDeleteTodo(index);
  }

  return (
    <div className="w-[326px] h-[124px] border border-black px-1 py-2">
      <div className="leading-8">
        <span className="mr-2">{todo.status == '1' ? FINISH : UNFINISH}</span>
        <span>{TODO_TITLE}: {todo.title}</span>
      </div>
      <div>
        <span>{TODO_CONTENT}: {todo.content}</span>
      </div>
      <div className="flex float-right gap-2">
        <UpdateButton />
        <DeleteButton onDeleteButtonClick={handleDeleteButtonClick} />
      </div>
    </div>
  )
}

export default TodoItem;