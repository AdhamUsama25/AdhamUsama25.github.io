import Header from "../../Header/Header";
import MouseFollower from "../../MouseFollower/MouseFollower";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MouseFollower />
      <Header />
      {children}
    </>
  );
};

export default Layout;
