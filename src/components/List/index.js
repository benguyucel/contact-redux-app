import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelector } from '../../redux/slice/contactSlice'
import Item from '../Item'

function List() {
    const contacts = useSelector(contactSelector.selectAll)
    return (
        <div>
            {contacts.map(item => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List