import "./App.css";
import half_dome from "./assets/half_dome.jpg";

function App() {
  return (
    <div className="container">
      <h1 className="title">Yosemite National Park</h1>
      <img
        className="scenery-img-styled"
        src={half_dome}
        alt="A beautiful scenery"
      />
      <p className="description">
        A picture of Yosemite National Park's Half Dome, halfway through the 4
        Mile Trail.
      </p>
    </div>
  );
}

export default App;
