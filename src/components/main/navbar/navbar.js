import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Storage from "../storage/storage";
import Import from "../import/import";
import Export from "../export/export";
import About from "../about/about";
import Error from "../error/error";
import Home from "../home/home";
import './navbar.css';

export default function Navbar() {
  let match = useRouteMatch();

  return(
    <div id="navbar">
      <div className="navbar-header">
        <div id="home">
          <Link to={`${match.url}`}>
            <div id="home-icon">
              <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2NjY2NjYyI+PHBhdGggZD0iTTExMywxOS43NzEzMmwtMTAzLjU4MzMzLDkzLjIyODY4aDI4LjI1djg0Ljc1aDY1LjkxNjY3di01Ni41aDE4LjgzMzMzdjU2LjVoNjUuOTE2Njd2LTg0Ljc1aDI4LjI1ek0xMTMsNDUuMTE1NGw1Ni41LDUwLjg1MzY4djcuNjE0MjZ2NzUuMzMzMzNoLTI4LjI1di01Ni41aC01Ni41djU2LjVoLTI4LjI1di04Mi45NDc1OXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
            </div>
            <div id="home-content">
              Inventory Management
            </div>
          </Link>
        </div>
        <div className="tab_menu">
        <ul id="tabs-list">
          <li className="tabs"><Link to={`${match.url}/storage`}>Storage</Link></li>
          <li className="tabs"><Link to={`${match.url}/import`}>Import</Link></li>
          <li className="tabs"><Link to={`${match.url}/export`}>Export</Link></li>
          <li className="tabs"><Link to={`${match.url}/about`}>About</Link></li>
        </ul>
          </div>
        <a className="logout_button" href='/'>Logout</a>
      </div>
      <div className="switch">
        <Switch>
          <Route exact path={`${match.path}`}>
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
          <Route path={`${match.path}/about`}>
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </div>
  );

}