import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/slice/contactSlice'
import { nanoid } from '@reduxjs/toolkit'
function Form() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) return false
        dispatch(addContact({ id: nanoid(), name }))
        setName("")

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