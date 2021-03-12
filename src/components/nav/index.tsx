import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT } from "../../stores/actions";
import Login from "../../pages/Login/index"

export const NavBar = () => {
    const user:any = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch( { type: LOGOUT } );
    };
    return (
    <nav>
        <div className="user-part">
            <Link className="navItems" to="/">
                Accueil
            </Link>
            <Link className="navItems" to="/sessions">
                Mes sessions
            </Link>
            {
                user.isLogged &&
                <Link to="/profile">
                    Mon profil
                </Link>
            }
        </div>
        { !user.isLogged &&
            <div className="auth-part">
                <Link className="navBtnItems" to="/login">
                    se connecter
                </Link>
                <Link className="navBtnItems" to="/signup">
                    s'inscrire
                </Link>
            </div>
        }
        { user.isLogged &&
          <button onClick={handleLogout}>Log Out</button>
        }

    </nav>
    )
}