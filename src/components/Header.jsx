import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import Form from "./Form";
const Header = ({ isDarkTheme, toggleDarkTheme, addTodo }) => {
  return (
    <section
      className={
        isDarkTheme ? "header-dark w-full p-8  " : "header-light w-full p-8 "
      }
    >
      <div className=" mx-auto max-w-xl">
        <div className="flex justify-between items-center mb-10 tracking-widest">
          <h4 className=" text pb-2 font-bold text-3xl text-white mt-4">
            TODO
          </h4>
          <button type="button" onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <img src={sun} alt="icon" className="" />
            ) : (
              <img src={moon} alt="icon" className="" />
            )}
          </button>
        </div>
        <Form addTodo={addTodo} isDarkTheme={isDarkTheme} />
      </div>
    </section>
  );
};

export default Header;
