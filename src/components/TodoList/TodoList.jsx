import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import './TodoList.css'
import { useState } from "react";
const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const completedTask = todos.filter(item => item.completed === true)
    const inCompletedTask = todos.filter(item => item.completed === false)

    const [displayPriority, setDisplayPriority] = useState([])
    // const handlePriorityFilter = filter => {
    //     if (filter === 'all') {
    //         setDisplayPriority(todos)
    //     } else if (filter === 'High') {
    //         const highPriority = todos.filter(todo => todo.priority === 'High')
    //         setDisplayPriority(highPriority)
    //     } else if (filter === 'Medium') {
    //         const mediumPriority = todos.filter(todo => todo.priority === 'Medium')
    //         setDisplayPriority(mediumPriority)
    //     }
    //     else if (filter === 'Low') {
    //         const lowPriority = todos.filter(todo => todo.priority === 'Low')
    //         setDisplayPriority(lowPriority)
    //     }
    //     else if (filter === 'completed') {
    //         const completeTask = todos.filter(item => item.completed === true)
    //         setDisplayPriority(completeTask)
    //     }
    //     else if (filter === 'incompleted') {
    //         const completeTask = todos.filter(item => item.completed === false)
    //         setDisplayPriority(completeTask)
    //     }
    // }




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

            <div className="max-w-3xl mx-auto glass mt-2 rounded-lg overflow-hidden mb-8 ">
                {/* <div className="flex justify-end  py-2 px-10   ">

                    <div className="flex border-[1px] border-gray-500 rounded-lg gap-6 px-3 py-4">
                        <div className="cursor-pointer hover:scale-90 duration-700 hover:text-green-600 hover:underline" onClick={() => handlePriorityFilter('all')}>All</div>
                        <div className="cursor-pointer hover:scale-90 duration-700 hover:text-green-600 hover:underline" onClick={() => handlePriorityFilter('High')}>High</div>
                        <div className="cursor-pointer hover:scale-90 duration-700 hover:text-green-600 hover:underline" onClick={() => handlePriorityFilter('Medium')}>Medium</div>
                        <div className="cursor-pointer hover:scale-90 duration-700 hover:text-green-600 hover:underline" onClick={() => handlePriorityFilter('Low')}>Low</div>
                    </div>
                </div> */}
                {
                    todos.map((todo) =>
                        <div className="flex items-center justify-between px-[2vw] lg:px-10 py-5 border-t-[1px] border-gray-400 font-medium"
                            key={todo.id}>

                            <div className={`${todo.completed ? "line-through text-green-600" : ""} w-1/2`}>{todo.title}</div>

                            <div className='text-center'>{todo.priority}</div>

                            <div className='flex gap-4'>

                                <button onClick={() => handleComplete(todo)}><IoCheckmarkDoneSharp size={20} /></button>
                                <button onClick={() => handleEdit(todo)}><MdEditDocument size={20} /></button>
                                <button onClick={() => handleDelete(todo)}><RiDeleteBin6Line size={20} /></button>
                            </div>

                        </div>)
                }

                <div className="flex w-full justify-between items-center bg-white p-2 lg:p-6">
                    <div className="bg-white">Total task: {todos.length}</div>
                    <div className="flex gap-2 lg:gap-4 bg-slate-300 px-2 lg:px-4 py-2 rounded">
                        <div >Completed task: {completedTask.length} </div>
                        <div >Incompleted task: {inCompletedTask.length}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TodoList;