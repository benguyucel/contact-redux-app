import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/slice/contactSlice'
import { nanoid } from '@reduxjs/toolkit'
function Form() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact({ id: nanoid(), name }))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </form>
        </div>
    )
}

export default Form