import React from 'react';
import './InputField.styles.css'

const InputField:React.FC=()=> {
  return (
    <form className='input'>
        <input type="input" placeholder='Enter Text here' className='input__box'></input>
        <button type="submit" className='input__submit'>Go</button>
    </form>
  )
}
export default  InputField
