import React from "react";
import UsersCard from "./UsersCard";
import "../style/userList.css";

const UsersList = ({ users, deleteUser, handleClickUpdate  }) => {
  if (!Array.isArray(users)) {
    return <p>No hay usuarios disponibles.</p>;
  }
  console.log(users);

  return (
    <section className="containerList">
      {users.map((user) => (
        <UsersCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleClickUpdate={handleClickUpdate}
        />
      ))}
    </section>
  );
};

export default UsersList;
