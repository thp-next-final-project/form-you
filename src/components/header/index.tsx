import { useSelector, useDispatch } from "react-redux"
import { LOGOUT } from "../../stores/actions";

const Header = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch( { type: LOGOUT } );
  };

  return (
    <header>
      <h1>
        FORM YOU
      </h1>
      <div>
        { !user.isLogged &&
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Subscribe</NavLink>
          </>
        }
        { !user.isLogged &&
          <input type="button" onClick={handleLogout}>Log Out</input>
        }
      </div>
    </header>
  )
};

export default Header;