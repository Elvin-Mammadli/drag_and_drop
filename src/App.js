import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';

function App() {

  const todoList = [
    { id: "1", content: "text1" },
    { id: "2", content: "text2" },
    { id: "3", content: "text3" },
    { id: "4", content: "text4" },
    { id: "5", content: "text5" },
  ]

  const [list, setList] = useState(todoList)

  const onEnd = result => {
    console.log(result)
    setList(reorder(list, result.source.index, result.destination.index))
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <div className='main-layout'>
      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId='todos'>
          {(provided, snapshot) => (
            <div className='todo-list' ref={provided.innerRef}>
              {list.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="todo-task"
                    >
                      <div>
                        {item.content}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )

}

export default App;
