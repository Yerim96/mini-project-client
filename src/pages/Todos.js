import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todos = () => {
  const [Input, setInput] = useState("");
  const [list, setlist] = useState([]);
  const addList = () => {
    const alist = {
      Input: Input,
    };
    const newList = [...list, alist];
    setlist(newList);

    // const form = document.forms.list; // form 요소를 가져옴
    // const pElements = form.getElementsByTagName("p");
    for (let i = 0; i < newList.length; i++) {
      const inputValue = newList[i].Input; // p 요소의 텍스트 내용을 가져옴
      console.log(inputValue);

      axios
        .post("http://localhost:4000/todo", { inputValue: inputValue })
        .then((res) => {
          console.log("Post request successful:", res.data);
          // 이후의 로직을 작성하세요
        })
        .catch((error) => {
          console.error("Error making post request:", error);
          // 이후의 로직을 작성하세요
        });
    }
  };

  return (
    <>
      <form name="list">
        <input
          type="text"
          id="Input"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="button" onClick={addList}>
          ADD
        </button>
        <div>
          {list.map((value, index) => {
            return (
              <>
                <div style={{ display: "flex" }}>
                  <label htmlFor="checkbox">
                    <input type="checkbox" id="checkbox"></input>
                  </label>
                  <p key={index}>{value.Input}</p>
                  <button></button>
                </div>
              </>
            );
          })}
        </div>
      </form>
    </>
  );
};
export default Todos;
