import UserMenu from "./user-menu";

import NavbarItems from "./navbar-items";

type Props = {};

const DashboardNavbar = (props: Props) => {
  return (
    <div
      className="border-b bg-background rounded-tl-lg rounded-tr-lg flex items-center gap-4 
    justify-between px-4 w-full h-12 text-sm ">
      <NavbarItems />
      <div className="">
        <UserMenu />
      </div>
    </div>
  );
};

export default DashboardNavbar;
