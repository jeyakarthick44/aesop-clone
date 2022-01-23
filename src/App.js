import "./App.css";
import HealthySkin from "./components/HealthySkin";
import Section from "./components/Section";
import Items from "./components/Items";
import Cleanser from "./components/Cleanser";

function App() {
  return (
    <div>
      <Section />
      <Items />
      <HealthySkin />
      <Cleanser />
    </div>
  );
}

export default App;
