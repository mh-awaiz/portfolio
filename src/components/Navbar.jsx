import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="icon" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-instagram"></i>
      </div>
    </nav>
  );
};

export default Navbar;
