import { FC, useCallback, useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import { getAllUsersService } from "./services/getAllUsers";
import { StyledAppContainer } from "./styles";
import { CreateUserCard } from "./components/CreateUserCard";
import type { IUpdateUser, IUser } from "./types";
import { createUserService } from "./services/createUser";

export const App: FC = () => {
  const [userData, setUserData] = useState<IUser[]>([]);

  const updateUser: IUpdateUser = useCallback(
    (newUserData) => {
      const filteredUserData = userData.filter(
        (user) => user.cpf !== newUserData.cpf
      );

      setUserData([...filteredUserData, newUserData]);
    },
    [userData]
  );

  const fetchData = useCallback(async (): Promise<void> => {
    const { data } = await getAllUsersService<IUser[]>();

    setUserData(data);
  }, []);

  async function handleCreateUser(user: { cpf: string, name: string }) {
    const { data } = await createUserService<IUser>(user);

    setUserData([...userData, data])
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <StyledAppContainer>
      <CreateUserCard handleConfirm={(user) => handleCreateUser(user)} />
      {userData.map((user) => {
        return (
          <UserCard
            key={user.cpf}
            deleteUser={() => console.log("apagou...")}
            user={user}
            updateUser={(user) => updateUser(user)}
          />
        );
      })}
    </StyledAppContainer>
  );
};
