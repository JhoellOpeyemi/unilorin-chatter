import { Footer, Header, Home } from "./components";
import { GlobalStyles, Container } from "./globalStyles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </>
  );
}

export default App;
