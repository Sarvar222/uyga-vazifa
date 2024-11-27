import "./Navbar.css";
function Navbar({ usersLenght }) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">KFoydalanuvchi</h1>
        <h3 className="navbar-counter">
          {usersLenght > 0
            ? "Sizda:" + usersLenght + " foydalanuvchi"
            : "Foydalanuvchilar yoq"}
        </h3>
      </div>
    </div>
  );
}
export default Navbar;
