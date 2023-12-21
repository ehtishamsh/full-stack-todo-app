import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faLightbulb,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faMoon } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
function Header({ todo, setTodo, theme, handleTheme }) {
  const [textValue, setTextValue] = useState("");
  function addtodo() {
    if (textValue !== "") {
      setTodo((prev) => {
        return [
          { id: nanoid(), text: textValue, completed: false, edit: false },
          ...prev,
        ];
      });
      setTextValue("");
    } else {
      return alert("PLEASE FILL THE INPUT FIELD");
    }
  }
  return (
    <header className="h-40 dark:bg-darkColor-400  bg-slate-50 flex flex-col items-center justify-center relative mb-16">
      <label
        htmlFor="modeToggle"
        className="flex items-center cursor-pointer absolute gap-4 top-8 right-16 mr-2"
      >
        <div
          onClick={handleTheme}
          className={`w-10 h-5  bg-darkColor-100 dark:bg-gray-200 rounded-full shadow-inner transition-all duration-500 flex items-center ${
            theme ? "justify-end" : "justify-start"
          }`}
        >
          <div className="w-[18px] h-[18px] mx-[1px]  dark:bg-slate-900 bg-slate-200 rounded-full flex justify-center items-center ">
            {theme ? (
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-slate-200 text-sm"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="text-slate-800 text-sm"
              />
            )}
          </div>
        </div>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => console.log("SignOut")}
        >
          Sign out
        </button>
      </label>

      <nav className="flex justify-center items-center gap-2">
        <FontAwesomeIcon
          icon={faSquareCheck}
          className="text-3xl text-blue-400 flex justify-center items-center pt-2"
        />
        <h2 className="text-purple-400 font-bold text-4xl">
          to<span className="text-blue-400">do</span>
        </h2>
      </nav>
      <div className="flex justify-center items-center gap-2 translate-y-20 absolute">
        <input
          type="text"
          id="addtext"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Create a Task"
          className="w-[620px] max-sm:w-[330px] max-md:w-[530px] max-xxs:w-[280px]  max-xxxs:w-[240px] p-3 rounded-lg dark:bg-darkColor-200 dark:border-darkColor-400 dark:border-2 dark:border-solid outline-none shadow-[0px_0px_23px_0px_#00000024]  bg-gray-100 dark:text-slate-200"
        />
        <button
          onClick={addtodo}
          className="p-3 rounded-lg bg-indigo-500 text-slate-200 hover:bg-indigo-600 transition-colors duration-300"
        >
          Add <FontAwesomeIcon icon={faCircleCheck} />
        </button>
      </div>
    </header>
  );
}

export default Header;
