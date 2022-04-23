import axios from "axios";
import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param {object} param0
 * @param {array} param0.rows
 * @param {(prev) => void} param0.setRows
 * @returns
 */
const Footer = ({ rows, setRows }) => {
  const location = useLocation();

  const leftCount =
    rows.length > 0
      ? rows.filter((prev) => {
          return prev.isComplete === false;
        })
      : [];

  const isActiveMenu = (loc) => {
    return [location.pathname === loc ? "selected" : ""].join(" ");
  };

  const handleClearComplete = async (e) => {
    e.preventDefault();
    const newRows = rows.filter((prev) => {
      return prev.isComplete === false;
    });

    let data = [];
    await rows.forEach((prev) => {
      if (prev.isComplete === true) {
        data.push({ [prev._id]: true });
      }
    });

    await axios
      .post("/clear-complete", { data: data })
      .then((res) => {
        res.status === 200 && setRows(newRows);
      })
      .catch((err) => console.log(err));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount.length}</strong> item left
      </span>

      <ul className="filters">
        <li>
          <Link to="/" className={isActiveMenu("/")}>
            All
          </Link>
        </li>
        <li>
          <Link to="/active" className={isActiveMenu("/active")}>
            Active
          </Link>
        </li>
        <li>
          <Link to="/complete" className={isActiveMenu("complete")}>
            Completed
          </Link>
        </li>
      </ul>

      <button className="clear-completed" onClick={handleClearComplete}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
