import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/body/Body";
import MainContainer from "./components/mainContainer/MainContainer";
import Watch from "./components/watch/Watch";
import Result from "./components/results/Result";

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
      },
      {
        path: '/results',
        element: <Result />
      }
    ]
  }
])

function App() {
  return (
    <div className="App min-h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
