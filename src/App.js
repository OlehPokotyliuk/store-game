import {
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page/HomePage";
import { Header } from "./components/Header/Header";
import { GamePage } from "./components/GamePage/GamePage";
import { OrderPage } from "./components/OrderPage/OrderPage";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/app/:title" element={<GamePage/>} />
        <Route path="/order" element={<OrderPage/>} />
      </Routes>
    </div>
    </Provider>
  );
}
export * from './pages/home-page/HomePage'


export default App;
