import { useEffect, useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [theme, setTheme] = useState(false);
  const [currentElementId, SetCurrentElementId] = useState("");
  function handleChange() {
    setTodo((prev) => {
      // Copied array so that we can change it
      const UpdatedArr = prev.map((item) => {
        if (item.id === currentElementId) {
          return { ...item, completed: !item.completed };
        }
        return { ...item };
      });
      // finding the element index that is selected so we can remove it using it
      const findCurrentElement = UpdatedArr.findIndex(
        (item) => item.id === currentElementId
      );
      // finding the last element that has completed as false
      // NOTE FOR ME:______ you have to slice the array to reverse it mean make shallow copy________
      const findLastElementWithFalse = UpdatedArr.slice()
        .reverse()
        .find((item) => item.completed === false);
      // Now finding the index of the last element which has completed as false from orginal array using indexOf
      const findLastIndexWithFalse = UpdatedArr.indexOf(
        findLastElementWithFalse
      );
      // Now finding the whole element which is currently selected so we can add it later again after removing it from orignal array.
      const findCurrent = UpdatedArr.find(
        (item) => item.id === currentElementId
      );
      // Removing the current element from original array which is findcurrent
      UpdatedArr.splice(findCurrentElement, 1)[0];
      // Now using the last index we founded from orginal array which is findLast... --Position to add element at--
      // 0 which tell it that we dont want to remove anything
      // Finally adding the element we want to add which is findcurrent
      UpdatedArr.splice(
        findLastIndexWithFalse === -1 ? 0 : findLastIndexWithFalse + 1,
        0,
        findCurrent
      );
      return [...UpdatedArr];
    });
  }
  function deleteTodo(e, id) {
    e.stopPropagation();
    setTodo((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }
  function updateText(e) {
    setTodo((prev) => {
      return prev.map((item) => {
        if (item.id === currentElementId) {
          return { ...item, text: e.target.value };
        }
        return { ...item };
      });
    });
  }
  function handleEdit(e, id) {
    e.stopPropagation();
    setTodo((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, edit: !item.edit };
        }
        return { ...item };
      });
    });
  }
  function changeStateTheme() {
    setTheme((prev) => !prev);
  }
  useEffect(() => {
    function themeToggle() {
      let htmlDoc = document.querySelector("html");
      htmlDoc.classList.remove("dark");
      htmlDoc.classList.remove("light");
      theme === true
        ? htmlDoc.classList.add("dark")
        : htmlDoc.classList.add("light");
    }
    themeToggle();
  }, [theme]);

  useEffect(() => {
    const stringFy = JSON.stringify(todo);
    const store = localStorage.setItem("todo", stringFy);
  }, [todo]);
  return (
    <div className="dark:bg-darkColor-300 bg-gray-200 h-screen w-screen overflow-x-hidden pb-6">
      <Header
        todo={todo}
        setTodo={setTodo}
        theme={theme}
        handleTheme={changeStateTheme}
      />
      <div className="flex justify-center items-center">
        <Todos
          todos={todo}
          setCurrentId={SetCurrentElementId}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
          updateText={updateText}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
