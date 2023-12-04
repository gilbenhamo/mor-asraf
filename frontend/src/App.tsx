import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
