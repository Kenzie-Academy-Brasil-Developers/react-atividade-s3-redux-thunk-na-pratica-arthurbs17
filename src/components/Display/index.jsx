import { useSelector } from "react-redux";
import { Comment, Content, Container } from "./styles";

const Display = () => {
  const user = useSelector((state) => state.user.comments);
  const userName = useSelector((state) => state.user.name);
  return (
    <Container>
      <h3>{userName}</h3>
      <Content>
        {user.map((comment) => (
          <Comment>{comment}</Comment>
        ))}
      </Content>
    </Container>
  );
};

export default Display;
