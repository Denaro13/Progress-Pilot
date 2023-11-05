const FilterButtons = ({
  isDarkTheme,
  allTodoItems,
  activeTodoItems,
  completedTodoItems,
}) => {
  return (
    <div
      className={
        isDarkTheme
          ? "btn-container bg-dark-blue mx-auto w-6/12 shadow-md p-6 pb-4 mb-16 flex justify-center"
          : "btn-container bg-white mx-auto w-6/12 shadow-md p-6 pb-4 mb-16 flex justify-center"
      }
    >
      <div className="w-1/2 flex justify-between">
        <button
          type="button"
          className="hover:text-bright-blue font-bold"
          onClick={() => allTodoItems()}
        >
          All
        </button>
        <button
          type="button"
          className="hover:text-bright-blue font-bold"
          onClick={() => activeTodoItems()}
        >
          Active
        </button>
        <button
          type="button"
          className="hover:text-bright-blue font-bold"
          onClick={() => completedTodoItems()}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
