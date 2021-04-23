import React, { useEffect } from 'react';

const TodoItem = ({name, deleteData, id, editData}) => {

    const [show, setShow] = React.useState(true)
    const [value, setValue] = React.useState(name)

    useEffect(() => {
        setValue(name)
    })
    const save = () => {
        editData(id, value)
        setShow(!show)
    }

    const btn = <button className='btn' onClick={()=>save(id,value)}>Save</button>
    return (
        <div className='form'>
                <input type="text" value={!show ? value : name} disabled={show} onChange={(e) => setValue(e.target.value)} />
                <button className='btn' onClick={() => deleteData(id)}>Remove</button>
                <button className='btn' onClick={() => setShow(!show)}>{show ? "Edit" : "Cancel"}</button>
                {!show ? btn : ''}
        </div>
    );
};

export default TodoItem;