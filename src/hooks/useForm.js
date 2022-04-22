import { useState } from "react";

const useForm = (initialState) => {
  const [payload, setPayload] = useState(initialState);
  const initialValid = fnInitialValid(initialState);
  const [valid, setValid] = useState(initialValid);
  const [message, setMessage] = useState(initialState);

  const fnOnChange =
    (name, checked = false) =>
    (event) => {
      let value = !checked ? event.target.value : event.target.checked;
      setPayload((prev) => ({
        ...prev,
        [name]: value,
      }));
      setValid((prev) => ({ ...prev, [name]: false }));
      setMessage((prev) => ({ ...prev, [name]: "" }));
    };

  const fnOnInvalid = (name, msg) => (event) => {
    event.preventDefault();
    setMessage((prev) => ({ ...prev, [name]: msg }));
    setValid((prev) => ({ ...prev, [name]: true }));
  };

  const fnUpdateState = (value) => {
    setPayload((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const fnIsValid = (formRef) => {
    const isValid = formRef.current.checkValidity();
    return isValid;
  };

  return {
    fnUpdateState,
    payload,
    fnOnChange,
    valid,
    fnOnInvalid,
    message,
    fnIsValid,
  };
};

const fnInitialValid = (initialState) => {
  return Object.keys(initialState).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});
};

export default useForm;
