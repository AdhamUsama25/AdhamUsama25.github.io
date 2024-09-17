import Header from "../../Header/Header";
import MouseFollower from "../../MouseFollower/MouseFollower";
import ThemeProvider from "../../../ThemeContext";
const Layout = ({ children }: { children: React.ReactNode }) => {

 

  return (
    <ThemeProvider>
      <MouseFollower />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
