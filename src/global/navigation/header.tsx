import UserMenu from "./user-menu";
import MobileSidebar from "./mobile";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center px-4 py-2 fixed top-0 left-0  w-full bg-background">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
