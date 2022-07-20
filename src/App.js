import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useOnlineStatus } from "./customHooks/useOnlineStatus";

import Home from "./components/Views/Home/Home";
import Game from "./components/Views/Game/Game";
import GameInstructions from "./components/Views/GameRules/GameRules";
import OfflineAppMessage from "./components/Layout/OfflineAppMessage/OfflineAppMessage";

function App() {
  // Checks if device is online
  const isOnline = useOnlineStatus();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="rules" element={<GameInstructions />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isOnline && <OfflineAppMessage />}
    </Router>
  );
}

export default App;
