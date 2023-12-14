import { FC, useCallback, useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import { listAllUsers } from "./services/listAllUsers";
import type { IUpdateUser, IUser } from "./types";
import { StyledAppContainer } from "./styles";

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
    const { data } = await listAllUsers<IUser[]>();

    setUserData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <StyledAppContainer>
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
