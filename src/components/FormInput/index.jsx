import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { Button, Container, Input } from "./styles";

const FormInput = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(addCommentThunk(userInput));
  };
  return (
    <Container>
      <Input onChange={(e) => setUserInput(e.target.value)} />
      <Button onClick={handleForm}>Enviar</Button>
    </Container>
  );
};

export default FormInput;
