import { useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

type UserData = {
  username: string;
  age: string;
  id: string;
};

function App() {
  const [usersList, setUsersList] = useState<UserData[]>([]);

  const isUsersListEmpty = Object.values(usersList).some(
    (userData) => userData.username.length > 0 && userData.age.length > 0
  );

  const addUserHandler = (username: string, age: string) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {!isUsersListEmpty && (
        <p style={{ textAlign: "center", color: "white" }}>No users record</p>
      )}
      {isUsersListEmpty && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
