import { CardModule } from "./CardModule";

type CardProps = {
  children: React.ReactNode | string;
};

export const Card = ({ children }: CardProps) => {
  return <CardModule>{children}</CardModule>;
};
