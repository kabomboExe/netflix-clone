import "./App.css";
import Main from "./components/Main";
import { MyListProvider } from "./context/MyListContext";

function App() {
  return (
    <MyListProvider>
      <div>
        <Main></Main>
      </div>
    </MyListProvider>
  );
}

export default App;
