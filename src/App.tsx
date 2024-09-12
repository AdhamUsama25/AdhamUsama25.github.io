import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Layout from "./Components/UI/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/contact",
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
    {
      path: "/resume",
      element: (
        <Layout>
          <Resume />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <div className="background-decor">{"</>"}</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
