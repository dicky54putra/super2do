/**
 *
 * @param {object} param0
 * @param {array} param0.rows
 * @returns
 */
const Footer = ({ rows }) => {
  const leftCount = rows.filter((prev) => {
    return prev.isComplete === false;
  });
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount.length}</strong> item left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
