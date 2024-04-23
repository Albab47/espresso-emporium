import Logo from "../assets/images/more/logo1.png";

const Header = () => {
  return (
    <header className="bg-header-bg bg-center py-3">
      <div className="flex justify-center items-center gap-3">
        <img src={Logo} className="w-16" alt="company logo" />
        <h1 className="text-4xl font-display text-white">Espresso Emporium</h1>
      </div>
    </header>
  );
};

export default Header;
