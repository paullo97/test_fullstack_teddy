// DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import AppBarComponent from "../../components/appBar";

const DefaultLayout = () => {
  return (
    <>
      <AppBarComponent />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
