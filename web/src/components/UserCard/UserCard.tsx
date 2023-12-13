import { FC, useMemo, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Card } from "../Card";
import { IUserCardProps } from "./types";

export const UserCard: FC<IUserCardProps> = ({
  cpf,
  deleteUser,
  name,
  updateName,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nameState, setNameState] = useState(name);

  const contentContainerContent = useMemo(() => {
    return (
      <>
        {isEditing ? (
          <Card.Input
            value={nameState}
            onChange={(event) => setNameState(event.target.value)}
          />
        ) : (
          <Card.Title title={nameState}>{nameState}</Card.Title>
        )}

        <Card.SubTitle>{cpf}</Card.SubTitle>
      </>
    );
  }, [cpf, isEditing, nameState, setNameState]);

  const iconsContainerContent = useMemo(() => {
    if (isEditing) {
      return (
        <Card.IconButton
          onClick={() => {
            setIsEditing(false);
            updateName(nameState);
          }}
        >
          <CheckIcon style={{ color: "#fff" }} />
        </Card.IconButton>
      );
    }

    return (
      <>
        <Card.IconButton onClick={() => setIsEditing(true)}>
          <EditIcon style={{ color: "#fff" }} />
        </Card.IconButton>
        <Card.IconButton onClick={() => deleteUser()}>
          <DeleteIcon style={{ color: "#fff" }} />
        </Card.IconButton>
      </>
    );
  }, [deleteUser, isEditing, nameState, updateName]);

  return (
    <Card.Root>
      <Card.Image src="https://picsum.photos/200" />

      <Card.ContentContainer>{contentContainerContent}</Card.ContentContainer>

      <Card.IconsContainer>{iconsContainerContent}</Card.IconsContainer>
    </Card.Root>
  );
};
