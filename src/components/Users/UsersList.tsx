import { UsersListModule } from "./UsersListModule";

export type UserData = {
  username: string;
  age: string;
  id: string;
};

type UsersListProp = {
  users: UserData[];
};

export const UsersList = ({ users }: UsersListProp) => {
  return (
    <UsersListModule>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </UsersListModule>
  );
};
