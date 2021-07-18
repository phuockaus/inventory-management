import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Storage from "../storage/storage";
import Import from "../import/import";
import Export from "../export/export";
import Report from "../report/report";
import Error from "../error/error";
import Home from "../home/home";

export default function Navbar() {
  let match = useRouteMatch();

  return(
    <div id="navbar">
      <ul>
        <li><Link to={`${match.url}/home`}>Home</Link></li>
        <li><Link to={`${match.url}/storage`}>Storage</Link></li>
        <li><Link to={`${match.url}/import`}>Import</Link></li>
        <li><Link to={`${match.url}/export`}>Export</Link></li>
        <li><Link to={`${match.url}/report`}>Report</Link></li>
      </ul>
      <Switch>
        <Route path={`${match.path}/home`}>
          <Home />
        </Route>
        <Route path={`${match.path}/storage`}>
          <Storage />
        </Route>
        <Route path={`${match.path}/import`}>
          <Import />
        </Route>
        <Route path={`${match.path}/export`}>
          <Export />
        </Route>
        <Route path={`${match.path}/report`}>
          <Report />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );

}