import FilterButtons from "./FilterButtons";
import SingleTodo from "./SingleTodo";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const TodoItems = ({
  todoItems,
  setTodoItems,
  removeTodo,
  editTodo,
  clearCompleted,
  countCompletedItems,
  isDarkTheme,
  allTodoItems,
  activeTodoItems,
  completedTodoItems,
}) => {
  const count = countCompletedItems();
  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedItems = reorder(
      todoItems,
      result.source.index,
      result.destination.index
    );

    setTodoItems(reorderedItems);
  };
  return (
    <>
      <div
        className={
          isDarkTheme
            ? "todo mx-auto w-6/12 shadow-md  pb-4 mb-8 bg-dark-blue"
            : "todo mx-auto w-6/12 shadow-md  pb-4 mb-8 bg-white "
        }
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoItems.map((todo, index) => (
                  <Draggable
                    key={todo.id}
                    draggableId={todo.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <SingleTodo
                          key={todo.id}
                          todo={todo}
                          removeTodo={removeTodo}
                          editTodo={editTodo}
                          isDarkTheme={isDarkTheme}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* {todoItems.map((todo) => {
          return (
            <SingleTodo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              editTodo={editTodo}
              isDarkTheme={isDarkTheme}
            />
          );
        })} */}
        <div className="flex justify-between mt-4 mx-8 py-4">
          <p>
            {count} item{count > 1 ? "s" : ""} left
          </p>
          <button
            type="button"
            className="hover:text-bright-blue"
            onClick={() => clearCompleted()}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <FilterButtons
        isDarkTheme={isDarkTheme}
        allTodoItems={allTodoItems}
        activeTodoItems={activeTodoItems}
        completedTodoItems={completedTodoItems}
      />
      <div className="text-center">
        <h3>Drag and drop to reorder list</h3>
      </div>
    </>
  );
};

export default TodoItems;
