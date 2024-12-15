import cakeLogo from "../../assets/cake.svg";
import "./Header.css"

export const Header = () => {
  return (
    <div className="header">
      <img src={cakeLogo} alt="cake logo" className="logo" />
    </div>
  );
};