import React from 'react';
import './InputField.styles.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=>void;
   
}



const InputField:React.FC<Props>=({todo,setTodo,handleAdd})=> {
  
  return (
    <form className='input' onSubmit={(e)=>handleAdd(e)}>
        <input type="input" placeholder='Enter Text here' className='input__box' 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)}
        >
        </input>
        <button type="submit" className='input__submit'>Go</button>
    </form>
  )
}
export default  InputField
