import "./App.css";
import img from "../public/model1_right.jpg";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen md:h-3/4 w-full">
        <img src={img} alt="Model 1" className="w-full h-fit object-cover" />
      </div>
    </>
  );
}

export default App;
