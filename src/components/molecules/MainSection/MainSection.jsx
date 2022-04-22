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
    const newRows = rows.filter((prev) => {
      if (prev._id === id) {
        prev.isComplete = !prev.isComplete;
      }
      return prev;
    });
    setRows(newRows);
  };

  const handleCheckeds = (e) => {
    const isTrue = [];

    rows?.forEach((prev) => {
      isTrue.push(prev.isComplete);
    });

    const newRows = rows.filter((prev) => {
      if (isTrue.includes(false)) {
        prev.isComplete = true;
      } else {
        prev.isComplete = false;
      }
      return prev;
    });

    setRows(newRows);
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
