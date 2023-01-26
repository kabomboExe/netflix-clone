import "./App.css";
import Main from "./pages/Main";
import { MyListProvider } from "./context/MyListContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchListPage from "./pages/WatchListPage";
import Root from "./pages/Root";
import { FetchProvider } from "./context/FetchContext";

const router = createBrowserRouter([
  {
    path: '/', element: <Root></Root>,
    children: [
      { path: '/', element: <Main></Main> },
      { path: 'watchlist', element: <WatchListPage></WatchListPage> }]

  },

]);

function App() {

  return (
    <FetchProvider>
      <MyListProvider>
        <RouterProvider router={router}></RouterProvider>
      </MyListProvider>
    </FetchProvider>
  );
}

export default App;
