import "../style/Header.css"

const Header = ({isToggled, handleClick}) => {
  
  return (
    <header className="header">
      <p className="naimat">enn4naimat</p>

      <i className={isToggled ? "bi bi-brightness-high-fill" : "bi bi-moon-fill" } onClick={handleClick}></i>

    </header>
  );
};

export default Header;