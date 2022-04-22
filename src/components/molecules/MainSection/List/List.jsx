/**
 *
 * @param {object} param0
 * @param {boolean} [param0.isComplete]
 * @param {string} param0.label
 * @param {() => void} [param0.handleRemove]
 * @param {() => void} [param0.handleChecked]
 * @returns
 */

const List = ({ isComplete, label, handleRemove, handleChecked }) => {
  return (
    <li className={[isComplete ? "completed" : ""].join(" ")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleChecked}
          checked={isComplete}
        />
        <label>{label}</label>
        <button className="destroy" onClick={handleRemove}></button>
      </div>
      <input className="edit" value={label} onChange={() => false} />
    </li>
  );
};

export default List;
