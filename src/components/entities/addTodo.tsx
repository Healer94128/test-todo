import { todo_content, todo_title } from '@/constant'

const addTodo = () => {
    return (
        <div className='flex flex-col gap-[26px]'>
            <input type="text" name="todo_title" id="todo_title" className='' placeholder={todo_title} />
            <textarea className="" placeholder={todo_content}></textarea>
        </div>
    );
}