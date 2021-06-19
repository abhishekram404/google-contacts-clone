import "./styles/App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Create from "./components/Create";

function App() {
  const { sidebar_expanded } = useSelector((state) => state.sidebar);
  const { createMode } = useSelector((state) => state.createMode);
  return (
    <>
      {createMode && <Create />}

      <div className="App">
        <Navbar />
        <div className={sidebar_expanded ? "container" : "container collapsed"}>
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
