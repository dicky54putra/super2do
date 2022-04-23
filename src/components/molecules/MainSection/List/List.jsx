import axios from "axios";
import { useRef, useState } from "react";

/**
 *
 * @param {object} param0
 * @param {boolean} [param0.isComplete]
 * @param {string} param0._id
 * @param {string} param0.label
 * @param {() => void} [param0.handleRemove]
 * @param {() => void} [param0.handleChecked]
 * @param {(prev) => void} [param0.setRows]
 * @returns
 */
const List = ({
  _id,
  isComplete,
  label,
  handleRemove,
  handleChecked,
  setRows,
}) => {
  const [value, setValue] = useState(label);
  const inputRef = useRef(null);

  const handleChangeToEdit = (e) => {
    const inputDisplay = inputRef.current.style.display;
    if (inputDisplay === "block") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "block";
    }
  };

  const handleChange = (_id) => (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/edit", { _id, label: value })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => console.log(err));
    setRows((prev) => {
      prev.filter((prevF) => {
        if (prevF._id === _id) {
          prevF.label = value;
        }
        return prevF;
      });
      return prev;
    });
  };

  return (
    <li className={[isComplete ? "completed" : ""].join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleChecked}
          checked={isComplete}
        />
        <label onClick={handleChangeToEdit}>{value}</label>
        <button className="destroy" onClick={handleRemove}></button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="edit"
          value={value}
          onChange={handleChange(_id)}
        />
      </form>
    </li>
  );
};

export default List;
