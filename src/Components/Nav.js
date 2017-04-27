import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const settingsClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const featuredClass = location.pathname.match(/^\/featured/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={settingsClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Projects</IndexLink>
              </li>
              <li className={archivesClass}>
                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
              </li>
              <li className={featuredClass}>
                <Link to="featured" onClick={this.toggleCollapse.bind(this)}>Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
