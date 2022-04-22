import { useEffect, useState } from "react";
import Footer from "src/components/molecules/Footer";
import Headers from "src/components/molecules/Headers";
import MainSection from "src/components/molecules/MainSection";
import HomeDummyData from "./HomeDummyData";

const Home = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(HomeDummyData);
  }, []);

  return (
    <section className="todoapp">
      <Headers title="Super2Do" setRows={setRows} />
      <MainSection rows={rows} setRows={setRows} />
      <Footer rows={rows} />
    </section>
  );
};

export default Home;
