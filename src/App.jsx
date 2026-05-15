import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { NewsProvider } from "./context/NewsContext";

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <Home />
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;