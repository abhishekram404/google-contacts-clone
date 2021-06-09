import "./styles/App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const { sidebar_expanded } = useSelector((state) => state.sidebar);

  return (
    <div className="App">
      <Navbar />
      <div className={sidebar_expanded ? "container" : "container collapsed"}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
