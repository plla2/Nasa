import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between items-center mx-4">
      <button className="Logo flex items-center">
        <img src={Logo} alt="로고이미지" width="40px" height="40px" />
        <span className="text-2xl font-bold">In Space</span>
      </button>
      <div className="Select flex justify-between w-[40%]">
        <button>회사소개</button>
        <button>솔루션</button>
        <button>제품소개</button>
        <button>우수조달</button>
      </div>
      <div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
