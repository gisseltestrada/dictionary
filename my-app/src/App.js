import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer";
import { DictionaryComponent } from "../src/screens/dictionary";
import { InfoBoxes } from "./components/info-boxes";

function App() {
  return (
    <div>
      <Navbar />
      <DictionaryComponent />
      <InfoBoxes />
      <Footer />
    </div>
  );
}

export default App;
