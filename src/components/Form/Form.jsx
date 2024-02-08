import { useEffect, useState } from 'react';
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const updateTodo = (title, id, completed, priority) => {
        const newTodo = todos.map((todo) =>
            (todo.id === id ? { title, id, completed, priority } : todo)
        )
        setTodos(newTodo);
        setEditTodo('')
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)

        } else {
            setInput('')

        }
    }, [setInput, editTodo])


    const onInputChange = e => {
        const value = e.target.value
        console.log(value)
        setInput(value)
    }
    // Handle radio button change
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: Date.now(), title: input, completed: false, priority: selectedOption }])
            setInput('')


        } else {
            updateTodo(input, editTodo.id, editTodo.completed, editTodo.priority)
        }


    }

    return (
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white  mx-auto mt-20 lg:mt-28">
            <div className="">
                <form onSubmit={onFormSubmit} className='flex flex-col lg:flex-row items-center bg-gray-100 rounded-md gap-4'>

                    <input className='w-full text-lg px-4 py-2 border lg:border-none outline-none bg-gray-100 text-gray-500' type="text" placeholder="todo" value={input} onChange={onInputChange} required />

                    {editTodo ? '' : <div className=' flex gap-2'>
                        <input type="radio" id="high" name='priority' value='High'
                            checked={selectedOption === 'High'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="high" >High</label><br />
                        <input type="radio" id="medium" name='priority' value='Medium' checked={selectedOption === 'Medium'}
                            onChange={handleRadioChange} />
                        <label htmlFor="medium">Medium</label><br />
                        <input type="radio" id="low" name='priority' value='Low' checked={selectedOption === 'Low'}
                            onChange={handleRadioChange} />
                        <label htmlFor="low">Low</label><br />

                    </div>}

                    <button type="submit" className="bg-green-400 px-6 py-2 my-2 lg:my-0  lg:rounded-r-md rounded-md uppercase">
                        {editTodo ? 'update' : "Add"}
                    </button>
                </form>
            </div>

        </div >
    )
}

export default Form
