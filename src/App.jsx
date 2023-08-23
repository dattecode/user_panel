import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ModalUsers from "./assets/components/ModalUsers";
import { EMPTY_FORM_VALUES } from "./assets/utils/emptyValues";
import UsersList from "./assets/components/UsersList";
import Navbar from "./assets/components/Navbar";

const BASE_URL = "https://users-crud.academlo.tech/users/";

function App() {
  //useStates
  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  //apiFunctions
  const getAllUsers = () => {
    axios
      .get(BASE_URL)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (data, reset) => {
    axios
      .post(BASE_URL, data)
      .then(() => {
        getAllUsers();
        reset(EMPTY_FORM_VALUES);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + `${idUser}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (userUpdate, reset) => {
    axios
      .put(BASE_URL + `${isUpdate.id}/`, userUpdate)
      .then(() => {
        getAllUsers();
        setIsModalShow(false);
        reset(EMPTY_FORM_VALUES);
        isUpdate(null);
      })
      .catch((err) => console.log(err));
  };

  //componentsFunctions

  const handleClickUpdate = (user) => {
    setIsModalShow(true);
    setIsUpdate(user);
  };

  const searchForEmail = () =>{
    const emails = users.filter((data) => data.email.includes(searchEmail))
  }

  //useEffects
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className={darkMode ? "darkMode" : "whiteMode"}>
      <ModalUsers
        createUser={createUser}
        setIsModalShow={setIsModalShow}
        isModalShow={isModalShow}
        isUpdate={isUpdate}
        updateUser={updateUser}
        setIsUpdate={setIsUpdate}
      />

      <Navbar 
        setIsModalShow={setIsModalShow}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />

      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
