import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { NavLinkProvider } from "./components/NavLinkProvider";
import { Crew } from "./pages/Crew";

function App() {
  return (
    <div className="font-default w-full min-h-screen bg-navy flex flex-col mx-auto">
      <NavLinkProvider>
        <Routes>
          <Route path="/space-tourism/" element={<Home />} />
          <Route path="/space-tourism/destination" element={<Destinations />} />
          <Route path="/space-tourism/crew" element={<Crew />} />
        </Routes>
      </NavLinkProvider>
    </div>
  );
}

export default App;
