import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../src/components/footer";
import { DictionaryComponent } from "../src/screens/dictionary";
import { ThesaurusComponent } from "../src/screens/thesaurus";
import { InfoBoxes } from "./components/info-boxes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DictionaryComponent />} />
        <Route path="/thesaurus" element={<ThesaurusComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
