import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const NavBar = () => (
    <nav>
        <div className="user-part">
            <Link to="/">
                Accueil
            </Link>
            <Link to="/sessions">
                Mes sessions
            </Link>
            <Link to="/profile">
                Mon profil
            </Link>
        </div>
        <div className="auth-part">
            <Link to="/login">
                se connecter
            </Link>
            <Link to="/signup">
                s'inscrire
            </Link>
        </div>
    </nav>
)