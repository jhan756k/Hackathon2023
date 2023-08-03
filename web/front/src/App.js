import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aipage from "./Page/Aipage";
import Homepage from "./Page/Homepage";
import Hospitalpage from "./Page/Hospitalpage";
import Consultpage from "./Page/Consultpage";
import Communitypage from "./Page/Communitypage";
import Safetypage from "./Page/Safetypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ai" element={<Aipage />} />
        <Route path="/hospital" element={<Hospitalpage />} />
        <Route path="/consult" element={<Consultpage />} />
        <Route path="/community" element={<Communitypage />} />
        <Route path="/safety" element={<Safetypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
