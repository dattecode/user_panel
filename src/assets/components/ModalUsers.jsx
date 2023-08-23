import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../style/modalUsers.css";
import { EMPTY_FORM_VALUES } from "../utils/emptyValues";

const ModalUsers = ({
  createUser,
  setIsModalShow,
  isModalShow,
  isUpdate,
  updateUser,
  setIsUpdate,
}) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    data.image_url = null;
    if (isFormValid(data)) {
      if (isUpdate) {
        updateUser(data, reset);
      } else {
        createUser(data, reset);
      }
    } else {
      window.alert("Please complete all fields.");
    }
  };

  const isFormValid = (data) => {
    return (
      data.first_name && data.last_name && data.password && data.email && data.birthday
    );
  };
  const handleCloseModal = () => {
    setIsModalShow(false);
    setIsUpdate(null);
    reset(EMPTY_FORM_VALUES);
  };

  useEffect(() => {
    if (isUpdate) {
      reset(isUpdate);
    }
  }, [isUpdate]);

  return (
    <section className={`containerModal ${isModalShow ? "" : "hiddenModal"}`}>
      <form onSubmit={handleSubmit(submit)} className="form">
        <button
          type="button"
          onClick={() => handleCloseModal()}
          className="closeBtn"
        >
          x
        </button>
        <h2 className="modalTitle">
          {isUpdate ? "Update User" : "Create User"}
        </h2>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div>
          <label htmlFor="last_name">LastName: </label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="birthday">Birthday: </label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="sendBtnModal">
          {isUpdate ? "Update" : "Check In"}
        </button>
      </form>
    </section>
  );
};

export default ModalUsers;
