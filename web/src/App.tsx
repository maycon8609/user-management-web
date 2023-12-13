import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Card } from "./components/card";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Card.Root>
        <Card.Image src="https://picsum.photos/200" />

        <Card.ContentContainer>
          <Card.Title>Maycon da silva sousa</Card.Title>
          <Card.SubTitle>123.456.789-01</Card.SubTitle>
        </Card.ContentContainer>

        <Card.IconsContainer>
          <Card.IconButton>
            <EditIcon style={{ color: "#fff" }} />
          </Card.IconButton>
          <Card.IconButton>
            <DeleteIcon style={{ color: "#fff" }} />
          </Card.IconButton>
        </Card.IconsContainer>
      </Card.Root>
    </>
  );
}

export default App;
