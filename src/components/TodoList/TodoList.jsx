import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import './TodoList.css'
const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const completedTask = todos.filter(item => item.completed === true)
    const inCompletedTask = todos.filter(item => item.completed === false)
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleComplete = (todo) => {
        console.log('click')
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
    return (
        <div className="">

            <div className="max-w-3xl mx-auto glass mt-2 rounded-lg overflow-hidden mb-8">
                {
                    todos.map((todo) =>
                        <div className="flex items-center justify-between px-10 py-5 border-b-[1px] font-medium "

                            key={todo.id}>
                            {/* <div>  <input className={`${todo.completed ? "line-through" : ""}`} type="text" value={todo.title}
                            onChange={(e) => e.preventDefault()}
                        /></div> */}
                            <div className={`${todo.completed ? "line-through" : ""} w-1/2`}>{todo.title}</div>

                            <div className={`${todo.completed ? "line-through bg-green-100" : ""}text-center`}>{todo.priority}</div>

                            <div className='flex gap-4'>

                                <button onClick={() => handleComplete(todo)}><IoCheckmarkDoneSharp /></button>
                                <button onClick={() => handleEdit(todo)}><MdEditDocument /></button>
                                <button onClick={() => handleDelete(todo)}><RiDeleteBin6Line /></button>
                            </div>

                        </div>)
                }
                <div className="flex w-full justify-between items-center bg-white  p-6">
                    <div className="bg-white">Total Task: {todos.length}</div>
                    <div className="flex gap-4 bg-slate-300 px-4 py-2 rounded">
                        <div className="">Completed task: {completedTask.length} </div>
                        <div className="">Incompleded task: {inCompletedTask.length}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TodoList