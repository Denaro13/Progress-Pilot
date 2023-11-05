import { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addTodo, isDarkTheme }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please Provide a value");
      return;
    }
    addTodo(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className={
            isDarkTheme
              ? "bg-dark-blue py-4 w-full pl-4 rounded mb-4"
              : "py-4 w-full pl-4 rounded mb-4 focus:to-bright-blue"
          }
          value={newItemName}
          placeholder="Create a new todo..."
          onChange={(e) => setNewItemName(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
