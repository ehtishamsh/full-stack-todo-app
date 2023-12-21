import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Todos({
  todos,
  setCurrentId,
  handleChange,
  deleteTodo,
  updateText,
  handleEdit,
}) {
  const checkCompelted = todos.filter((item) => item.completed === true);
  const todoElement = todos.map((todo, index) => {
    return (
      <div
        key={index}
        onClick={() => setCurrentId(todo.id)}
        className={`flex justify-between items-center w-full gap-4 dark:bg-darkColor-100 bg-gray-100 p-4 dark:text-slate-200 text-darkColor-75 border-solid ${
          todo.completed
            ? " dark:border-darkColor-100 border-gray-300"
            : " dark:border-darkColor-75 border-gray-300"
        } border rounded-lg`}
      >
        <div
          className={`flex items-center  ${
            todo.completed && "pointer-events-none"
          } `}
        >
          <input
            type="checkbox"
            id="checkbox"
            className="hidden"
            checked={todo.completed}
            onChange={handleChange}
          />
          <label
            htmlFor="checkbox"
            className={`flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer  ${
              todo.completed
                ? "border-purple-500 bg-purple-500"
                : "border-indigo-500 bg-transparent"
            }`}
          >
            {todo.completed === true && (
              <FontAwesomeIcon
                icon={faCheck}
                className="text-slate-50 text-[10px]"
              />
            )}
          </label>
        </div>
        <div className="w-full flex item-center">
          <input
            type="text"
            className={`transition-all duration-500 text-sm border-none active:outline-0 focus:outline-0 w-full ${
              todo.edit
                ? "dark:bg-darkColor-75 bg-blue-100 rounded-lg p-2 "
                : "bg-inherit p-0 m-0"
            } ${todo.completed && "line-through pointer-events-none"}`}
            onChange={(e) => updateText(e)}
            disabled={todo.edit ? false : true}
            value={todo.text}
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          {todo.completed === false && (
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-sm text-darkColor-50 cursor-pointer hover:text-gray-400 hover:transform hover:scale-150 transition-all duration-500"
              onClick={(e) => handleEdit(e, todo.id)}
            />
          )}
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-sm text-darkColor-50 cursor-pointer hover:text-gray-400 hover:transform hover:scale-150 transition-all duration-500"
            onClick={(e) => deleteTodo(e, todo.id)}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="w-[700px] max-sm:w-[411px] max-md:w-[611px] max-xxs:w-[361px] max-xxxs:w-[321px] ">
      <div className="flex justify-between items-center">
        <h3 className="text-sm text-indigo-400 font-bold">
          Tasks Created
          <span className="bg-gray-700 text-slate-200 px-2 py-[2px] text-xs rounded-xl ml-1">
            {todos.length}
          </span>
        </h3>
        <h3 className="text-sm text-purple-500 font-bold">
          Completed
          <span className="bg-gray-700 text-slate-200 px-2 py-[2px] text-xs rounded-xl ml-1">
            {checkCompelted.length} out of {todos.length}
          </span>
        </h3>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center gap-3">
        {todos.length > 0 ? (
          todoElement
        ) : (
          <>
            <hr className="w-full border-solid border dark:border-darkColor-100 border-gray-300 mb-16" />
            <img src="/EmptyList.png" alt="" className="w-16 mb-4" />
            <p className="dark:text-darkColor-50 text-darkColor-75 font-bold text-base">
              You haven't added any tasks yet
            </p>
            <p className="dark:text-darkColor-50 text-darkColor-75 text-base">
              Create tasks and organize your to-do items
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Todos;
