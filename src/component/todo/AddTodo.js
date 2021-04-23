import React from 'react';

const AddTodo = ({data,setData}) => {
    const [value,setValue] = React.useState()

    const AddTodoToData = () => {
        if (!value){
            return
        }
        const todo = {
            id: data.length > 0 ? data[data.length -1].id + 1 : 1,
            name: value,
        }
        setData([...data, todo])
        setValue('')
    }

    return (
        <div className="form">
            <input value={value} onChange={(e)=>setValue(e.target.value)} />
            <button className='btn' disabled={!value} onClick={AddTodoToData}>Add to-do</button>
        </div>
    );
};

export default AddTodo;