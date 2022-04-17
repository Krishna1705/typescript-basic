import React,{useState,useRef, useEffect} from 'react';
import {Todo} from '../model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './SingleTodo.style.css';

interface Props{
    todo:Todo,
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {

const [edit,setEdit]=useState<boolean>(false);
const [editTodo,setEditTodo]=useState<string>(todo.todo);
const editRef=useRef<HTMLInputElement>(null)
useEffect(()=>{
  editRef.current?.focus();
},[edit])

  const handleDone=(id:number)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
  }
  const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id !==id))
  }
  const handleEdit=(id:number)=>{
    if( !todo.isDone){
      setEdit(!edit);
     
    }
  }

  const handleEditSubmit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
      setTodos(todos.map((todo)=>todo.id===id? {...todo,todo:editTodo}:todo))
      setEdit(false);
  }


  console.log('>>>>>>>>',todos)
  return (<>
  <form className='toods_single' onSubmit={(e)=>handleEditSubmit(e,todo.id)}>
  
    {edit?
    (<>
       <input type='text' className='todos_single--text' value={editTodo} ref={editRef} onChange={(e)=>setEditTodo(e.target.value)} />
    </>)
    :
    (<>
        {
          todo.isDone
          ? 
          (<s className='todos_single--text'>{todo.todo}</s>)
          :
          (<span className='todos_single--text'>{todo.todo}</span>)
        }
    </>)
    }
     
     <div>
         <span className="icon" onClick={()=>{handleEdit(todo.id)}}><AiFillEdit/></span>
         <span className="icon"  onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
         <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone/></span>
     </div>
    
  </form>
   
  </>)
}

export default SingleTodo