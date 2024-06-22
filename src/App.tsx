import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Destinations } from "./pages/Destinations";

function App() {
  return (
    <div className="font-default w-full min-h-screen bg-navy flex flex-col mx-auto">
      <Routes>
        <Route path="/space-tourism/" element={<Home />} />
        <Route path="/space-tourism/destinations" element={<Destinations />}/>
      </Routes>
    </div>
  );
}

export default App;
