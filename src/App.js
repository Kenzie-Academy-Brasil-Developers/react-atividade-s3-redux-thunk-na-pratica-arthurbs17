import Display from "./components/Display";
import FormInput from "./components/FormInput";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Display />
        <FormInput />
      </Container>
    </div>
  );
}

export default App;
