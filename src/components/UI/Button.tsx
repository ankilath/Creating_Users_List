import { ButtonModule } from "./ButtonModule";

type Buttonprops = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  isDisabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({
  type,
  onClick,
  isDisabled,
  children,
}: Buttonprops) => {
  return (
    <ButtonModule
      type={type || "button"}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </ButtonModule>
  );
};
