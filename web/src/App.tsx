import { UserCard } from "./components/UserCard";
import { useCallback, useState } from "react";

type IUserData = {
  cpf: string;
  name: string;
};

type IUpdateUser = (
  targetUser: IUserData,
  newUserData: { name: string }
) => void;

export function App() {
  const [userData, setUserData] = useState<IUserData[]>([
    {
      cpf: "123.456.789-01",
      name: "maycon da silva sousa",
    },
    {
      cpf: "123.456.789-02",
      name: "maycon silva",
    },
    {
      cpf: "123.456.789-03",
      name: "maycon",
    },
  ]);

  const updateUser: IUpdateUser = useCallback(
    (targetUser, newUserData) => {
      const filteredUserData = userData.filter(
        (user) => user.cpf !== targetUser.cpf
      );
      const updatedUserData: IUserData = {
        cpf: targetUser.cpf,
        name: newUserData.name,
      };

      setUserData([...filteredUserData, updatedUserData]);
    },
    [userData]
  );

  return (
    <>
      {userData.map((user, key) => (
        <UserCard
          key={key}
          cpf={user.cpf}
          deleteUser={() => console.log("apagou...")}
          name={user.name}
          updateName={(updatedName) => updateUser(user, { name: updatedName })}
        />
      ))}
    </>
  );
}
