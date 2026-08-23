import { useState } from "react"

export const useField = (name='', type='text', placeholder) =>{
    const [value, setValue] = useState('')
    const onChange = (event) => {
        setValue(event.target.value)
    }
    return { type, value, onChange, name, placeholder }
}

