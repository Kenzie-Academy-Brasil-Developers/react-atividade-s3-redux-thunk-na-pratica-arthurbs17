import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const FormInput = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(addCommentThunk(userInput));
  };
  return (
    <div>
      <input onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleForm}>Enviar</button>
    </div>
  );
};

export default FormInput;
