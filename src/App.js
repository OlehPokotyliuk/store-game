import {
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { Header } from "./components/Header/Header";
import { GamePage } from "./components/GamePage/GamePage";
import { OrderPage } from "./components/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/store-game" element={<HomePage />} />
        <Route path="/app/:title" element={<GamePage/>} />
        <Route path="/order" element={<OrderPage/>} />
      </Routes>
    </div>
  );
}
export * from './pages/home-page/HomePage'


export default App;
