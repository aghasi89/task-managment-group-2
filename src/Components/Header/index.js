// import { UserInfoBar } from "./UserInfoBar";
import { useDispatch } from "react-redux";
import { getLogout } from "../../Store/Actions";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Dashboard</span>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(getLogout())}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};


export default Header