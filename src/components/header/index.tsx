import { useSelector, useDispatch } from "react-redux"
// import { NavLink } from "react-router-dom";
import { LOGOUT } from "../../stores/actions";

const Header = () => {
  const user:any = useSelector((state) => state);
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
            <div >Login</div>
            <div>Subscribe</div>
          </>
        }
        { user.isLogged &&
          <button onClick={handleLogout}>Log Out</button>
        }
      </div>
    </header>
  )
};

export default Header;