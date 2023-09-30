import React, { useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'
import users from "../data.json"
import "./mention.css"



const Input = () => {
   

    const [inputValue,SetInputValue] = useState("")
    const handleChange =(e)=>{
        SetInputValue(e.target.value)
    }

  return (
    <div >
      
      <MentionsInput value={inputValue} placeholder='Please enter something' className='center' onChange={handleChange}>
       <Mention trigger="@"  data={users} className='mentions' />
      </MentionsInput>
    </div>
  )
}

export default Input
