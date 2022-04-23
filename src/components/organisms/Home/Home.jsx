import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "src/components/molecules/Footer";
import Headers from "src/components/molecules/Headers";
import MainSection from "src/components/molecules/MainSection";

/**
 *
 * @param {object} param0
 * @param {boolean} [param0.isActive]
 * @param {boolean} [param0.isComplete]
 * @param {boolean} [param0.isDummy]
 * @returns
 */
const Home = ({ isActive, isComplete }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!isActive && !isComplete) {
      axios
        .get("/todo")
        .then((res) => {
          setRows(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    if (isActive) {
      axios
        .get("/todo-active")
        .then((res) => {
          setRows(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    if (isComplete) {
      axios
        .get("/todo-complete")
        .then((res) => {
          setRows(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [isActive, isComplete]);

  return (
    <section className="todoapp">
      <Headers title="Super2Do" setRows={setRows} />
      <MainSection rows={rows} setRows={setRows} />
      <Footer rows={rows} setRows={setRows} />
    </section>
  );
};

export default Home;
