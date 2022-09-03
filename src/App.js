import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';

function App() {


  const todoList = [{ id: 1, content: "text1" }, { id: 2, content: "text2" }, { id: 3, content: "text3" }, { id: 4, content: "text4" }, { id: 5, content: "text5" },]

  return (
    <div className='main-layout'>
      <DragDropContext onDragEnd={() => { }}>
        <div className='container'>
          <Droppable droppableId='todos'>
            {(provided) => (
              <div className='todo-list' ref={provided.innerRef} {...provided.droppableProps}>
                {todoList.map((item, index) => (
                  <Draggable draggableId={`todo-task-${item.id}`} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="todo-task"
                        index={index}
                        key={index}
                        id={`task-${item.id}`}
                      >
                        {item.content}
                      </div>
                    )}

                  </Draggable>
                ))}
              </div>
            )}

          </Droppable>
        </div>
      </DragDropContext>
    </div>
  )

}

export default App;
