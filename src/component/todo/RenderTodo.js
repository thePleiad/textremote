import React from 'react';
import {todos} from "../data";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const RenderTodo = () => {
  const [data, setData] = React.useState(todos)


  const deleteData = (id) => {
    let filteredData = data.filter(todo => todo.id !== id)
    setData(filteredData);
  }

  const editData = (id,value) => {
    const itemIndex = data.findIndex(todo => todo.id === id)
    const newData = [...data]
    newData[itemIndex].name = value
    setData(newData)
  }

    return (
      <>
        <AddTodo data={data} setData={setData}/>
        <div>
          {data.map((todo, index) => {
            return (
               <div key={index}>
                 <TodoItem editData={editData} id={todo.id} deleteData={deleteData} name={todo.name} />
               </div>
            )
          })}
        </div>
      </>
    );
};

export default RenderTodo;