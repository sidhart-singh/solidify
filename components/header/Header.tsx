import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <img src={"./logo.png"} alt="Logo" width={42} height={42} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
