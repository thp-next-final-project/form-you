import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";



export const Paths = () => {
    return(
    <Switch>
        <Route path="/" exact>
            acueil
        </Route>
        <Route path="/sessions/:sessionId">
            {/*
                pour chopper le slug, il faut passer un enfant a la route et
                ENSUITE utiliser le hook getParams dans l'enfant.
                (de preference dans un useEffect)
            */}
        </Route>
        <Route path="/login" exact>
            connection
        </Route>
        <Route path="/signup" exact>
            inscription
        </Route>
    </Switch>
    )
}