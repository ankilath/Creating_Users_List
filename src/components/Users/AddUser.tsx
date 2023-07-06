import { useState } from "react";
import { Button } from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";
import { styled } from "styled-components";
import { CardModule } from "../UI/CardModule";

const initialFormData = {
  username: null || "",
  age: null || "",
};

type AddUserProps = {
  onAddUser: (username: string, age: string) => void;
};

const StyledAddUserSection = styled(CardModule)`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

export const AddUser = ({ onAddUser }: AddUserProps) => {
  const [userData, setUserData] = useState(initialFormData);
  const [error, setError] = useState(false); // TODO
  const enabled =
    userData.username.trim().length > 0 &&
    userData.age.trim().length > 0 &&
    +userData.age > 0;

  const addUserHandler = (event: any) => {
    event.preventDefault();
    onAddUser(userData.username, userData.age);
    setUserData(initialFormData);
  };

  const changeUserInputHandler = (input: string, value: string) => {
    setUserData((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const dismissModalHandler = () => {
    setError(false); // TODO
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title="An error occured!"
          message="Something went wrong!"
          onDismissModal={dismissModalHandler}
        />
      )}
      <StyledAddUserSection>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(event) =>
              changeUserInputHandler("username", event.target.value)
            }
            value={userData["username"] || ""}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            onChange={(event) =>
              changeUserInputHandler("age", event.target.value)
            }
            value={userData["age"] || ""}
          />
          <Button type="submit" isDisabled={!enabled}>
            Add user
          </Button>
        </form>
      </StyledAddUserSection>
    </div>
  );
};
