import { Button } from "./Button";
import styled from "styled-components";
import { CardModule } from "./CardModule";

type ErrorModalProps = {
  title: string;
  message: string;
  onDismissModal: () => void;
};

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledErrorModal = styled(CardModule)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  & div p {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    & {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

export const ErrorModal = ({
  title,
  message,
  onDismissModal,
}: ErrorModalProps) => {
  return (
    <div>
      <StyledBackDrop onClick={onDismissModal} />
      <StyledErrorModal>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <Button type="button" onClick={onDismissModal}>
            Okay
          </Button>
        </footer>
      </StyledErrorModal>
    </div>
  );
};
