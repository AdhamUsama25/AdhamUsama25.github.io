import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import MouseFollower from "./Components/MouseFollower/MouseFollower";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
  ]);

  return (
    <>
      <MouseFollower />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
