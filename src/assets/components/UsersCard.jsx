import React from "react";
import "../style/usersCard.css";

const UsersCard = ({ user, deleteUser, handleClickUpdate }) => {
  console.log(user);

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      deleteUser(user.id);
    }
  };

  return (
    <article className="containerUser">
      <div className="titleContent">
        <h2 className="titleUser">{user.email}</h2>
      </div>

      <ul className="infoUser">
        <li>First Name: {user.first_name}</li>
        <li>Last Name: {user.last_name}</li>
        <li>Email : {user.email}</li>
        <li>Birthday: {user.birthday}</li>
      </ul>

      <div className="containtButtons">
        <button className="btnUpdate" onClick={() => handleClickUpdate(user)}>
          Update
        </button>
        <button className="btnDelete" onClick={() => handleDeleteClick(user)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default UsersCard;
