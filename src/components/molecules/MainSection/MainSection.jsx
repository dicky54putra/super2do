import axios from "axios";
import List from "./List";

/**
 *
 * @param {object} param0
 * @param {array} param0.rows
 * @param {(prev) => void} [param0.setRows]
 * @returns
 */
const MainSection = ({ rows, setRows }) => {
  const handleRemove = (id) => (e) => {
    e.preventDefault();
    const newRows = rows.filter((prev) => prev._id !== id);
    setRows(newRows);
  };

  const handleChecked = (id) => (e) => {
    e.preventDefault();
    const newRows = rows.filter((prev) => {
      if (prev._id === id) {
        prev.isComplete = !prev.isComplete;
      }
      return prev;
    });
    axios
      .post("checked", { _id: id })
      .then((res) => {
        res.status === 200 && setRows(newRows);
      })
      .catch((err) => console.log(err));
  };

  const handleCheckeds = async (e) => {
    let isTrue = [];
    let data = [];

    await rows?.forEach((prev) => {
      isTrue.push(prev.isComplete);
      data.push({ [prev._id]: prev.isComplete });
    });

    const newRows = rows.filter((prev) => {
      if (isTrue.includes(false)) {
        prev.isComplete = true;
        data.push({ [prev._id]: true });
      } else {
        prev.isComplete = false;
        data.push({ [prev._id]: false });
      }
      return prev;
    });

    await axios
      .post("checkeds", { data: data })
      .then((res) => {
        res.status === 200 && setRows(newRows);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleCheckeds}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {rows?.map((row) => {
          return (
            <List
              key={row._id}
              isComplete={row.isComplete}
              label={row.label}
              handleRemove={handleRemove(row._id)}
              handleChecked={handleChecked(row._id)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MainSection;
