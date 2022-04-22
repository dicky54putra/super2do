import React from "react";
import useForm from "src/hooks/useForm";

/**
 *
 * @param {object} param0
 * @param {string} param0.title
 * @param {(prev) => void} [param0.setRows]
 *
 * @example <Headers title="Super2Do">
 * @returns
 */
const Headers = ({ title, setRows }) => {
  const { payload, fnOnChange } = useForm({
    todo: "",
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: payload.todo,
      label: payload.todo,
      isComplete: false,
    };
    setRows((prev) => [...prev, data]);
    payload.todo = "";
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <form method="post" onSubmit={HandleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={payload.todo}
          onChange={fnOnChange("todo")}
        />
      </form>
    </header>
  );
};

export default Headers;
