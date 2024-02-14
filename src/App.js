import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import MainContainer from "./components/mainContainer/MainContainer";
import Watch from "./components/watch/Watch";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <Watch />
      }
    ]
  }
])

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
