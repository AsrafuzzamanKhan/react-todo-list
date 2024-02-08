import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const [selectedOption, setSelectedOption] = useState('');


    // const { register, handleSubmit, formState: { errors } } = useForm();


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
            // selectedOption(editTodo.priority)
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
    // hook form 
    // const onSubmit = data => {
    //     setInput(data)
    //     console.log(data);
    //     if (!editTodo) {
    //         setTodos([...todos, { id: Date.now(), title: data.input, completed: false, priority: data.priority }])
    //         setInput('')
    //         console.log(todos)
    //     } else {
    //         updateTodo(data.input, editTodo.data.id, editTodo.data.completed, editTodo.data.priority)
    //         setInput(data)
    //     }
    // };
    // console.log(errors);
    return (
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white  mx-auto mt-8">
            <div className="">
                <form onSubmit={onFormSubmit} className='flex items-center bg-gray-100 rounded-md'>
                    {/* <form onSubmit={handleSubmit(onSubmit)} className='flex items-center bg-gray-100 px-4 py-4 rounded-md'> */}

                    <input className='w-full text-lg px-4 py-2 border-none outline-none bg-gray-100 text-gray-500' type="text" placeholder="todo" value={input} onChange={onInputChange} required />

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



                    <button type="submit" className="bg-green-400 px-6 py-2  rounded-r-md">
                        {editTodo ? 'ok' : "Add"}
                    </button>
                </form>
            </div>

        </div >
    )
}

export default Form



{/* <input type="text" placeholder="Todo" defaultValue={input} {...register("input", { required: true, maxLength: 80 })} /> */ }

{/* value  */ }
{/* {
                        editTodo ? '' : <>
                            <input {...register("priority", { required: true })} type="radio" value="high" />
                            <input {...register("priority", { required: true })} type="radio" value="medium" />
                            <input {...register("priority", { required: true })} type="radio" value="low" /></>
                    } */}

{/* value  */ }

{/* <div
                        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
                    ></div>

                    <div
                        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
                    ></div>

                    <div
                        className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
                    ></div> */}