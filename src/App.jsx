import { useState } from "react";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import TodoItems from "./components/TodoItems";
import { ToastContainer, toast } from "react-toastify";
import ReorderableList from "./components/ReorderableList";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  const [todoItems, setTodoItems] = useState(getLocalStorage());
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setTodoItems(reorderedItems);
  };

  const addTodo = (todo) => {
    const newTodo = {
      name: todo,
      completed: false,
      active: true,
      id: nanoid(),
    };
    const newTodoItems = [...getLocalStorage(), newTodo];
    setTodoItems(newTodoItems);
    setLocalStorage(newTodoItems);
    toast.success("Todo added to the list");
  };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };

  const removeTodo = (todoId) => {
    const newTodoItems = getLocalStorage().filter((todo) => todo.id !== todoId);
    setTodoItems(newTodoItems);
    setLocalStorage(newTodoItems);
    toast.success("Todo removed");
  };

  const clearCompleted = () => {
    const completedTodoItems = getLocalStorage().filter(
      (todo) => todo.completed === true
    );
    if (completedTodoItems.length === 0) return;
    const newTodoItems = getLocalStorage().filter(
      (todo) => todo.completed === false
    );
    setTodoItems(newTodoItems);
    setLocalStorage(newTodoItems);
    toast.success("Good job, all completed todo cleared");
  };

  const editTodo = (todoId) => {
    const newTodoItems = todoItems.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed, active: !todo.active };
      }
      return todo;
    });
    setTodoItems(newTodoItems);
    setLocalStorage(newTodoItems);
  };

  const activeTodoItems = () => {
    const newTodoItems = getLocalStorage().filter(
      (todo) => todo.active === true
    );
    setTodoItems(newTodoItems);
  };
  const completedTodoItems = () => {
    const newTodoItems = getLocalStorage().filter(
      (todo) => todo.completed === true
    );
    if (newTodoItems.length < 1) return;
    setTodoItems(newTodoItems);
  };

  const allTodoItems = () => {
    const allTodoItems = getLocalStorage().filter((todo) => todo);
    setTodoItems(allTodoItems);
  };

  function countCompletedItems(todoList) {
    const completedItems = getLocalStorage().filter((item) => item.active);
    return completedItems.length;
  }

  return (
    <main>
      <section>
        <ToastContainer position="top-center" />
        <Header
          isDarkTheme={isDarkTheme}
          toggleDarkTheme={toggleDarkTheme}
          addTodo={addTodo}
        />
        <TodoItems
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          removeTodo={removeTodo}
          editTodo={editTodo}
          clearCompleted={clearCompleted}
          countCompletedItems={countCompletedItems}
          isDarkTheme={isDarkTheme}
          allTodoItems={allTodoItems}
          activeTodoItems={activeTodoItems}
          completedTodoItems={completedTodoItems}
          onDragEnd={onDragEnd}
        />
      </section>
    </main>
  );
}

export default App;
