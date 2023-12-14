import { UserCard } from "./components/UserCard";
import { useCallback, useState } from "react";

type IUserData = {
  cpf: string;
  name: string;
};

type IUpdateUser = (newUserData: IUserData) => void;

export function App() {
  const [userData, setUserData] = useState<IUserData[]>([
    {
      cpf: "111.111.111-11",
      name: "Danilo 111.111.111-11",
    },
    {
      cpf: "222.222.222-22",
      name: "Leandro 222.222.222-22",
    },
    {
      cpf: "333.333.333-33",
      name: "Rayssa 333.333.333-33",
    },
  ]);

  const updateUser: IUpdateUser = useCallback(
    (newUserData) => {
      const filteredUserData = userData.filter(
        (user) => user.cpf !== newUserData.cpf
      );

      setUserData([...filteredUserData, newUserData]);

      console.log({ filteredUserData, newUserData });
    },
    [userData]
  );

  return (
    <>
      {userData.map((user, index) => {
        return (
          <UserCard
            key={index}
            cpf={user.cpf}
            deleteUser={() => console.log("apagou...")}
            name={user.name}
            updateName={(newUserData) => updateUser(newUserData)}
          />
        );
      })}
    </>
  );
}
