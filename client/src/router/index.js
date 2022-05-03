import React, { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CHECKING_AUTH, ENUM_STATUS, genericAction } from "../redux/actions";
import { routerConfig } from "../config";
import { MapRoute } from "./MapRoute";

export function RootRouter() {
  const dispatch = useDispatch();
  const history = useHistory();

  const checkAuth = useCallback(() => {
    dispatch(genericAction(CHECKING_AUTH, ENUM_STATUS.FETCHING, { history }));
  }, [dispatch, history]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <Router>
      <Switch>
        {routerConfig.map((r) => (
          <MapRoute key={r.name} {...r} />
        ))}
      </Switch>
    </Router>
  );
}
