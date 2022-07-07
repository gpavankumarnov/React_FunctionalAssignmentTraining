import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const HeaderComponent = () => {
  return (
    <header>
      <div className="header_logo">
        <h1>T-Vault</h1>
      </div>
      <nav className="header_nav-container">
        <ul>
          <NavLink activeClassName="active" to="/">
            <li>Safes</li>
          </NavLink>

          <NavLink activeClassName="active" to="/VaultAppRoles/?data=hello">
            <li>Vault AppRoles</li>
          </NavLink>
          <NavLink activeClassName="active" to="/ServiceAccounts">
            <li>Service Accounts</li>
          </NavLink>
          <NavLink activeClassName="active" to="/IAMServiceAccounts">
            <li>IAM Service Accounts</li>
          </NavLink>
          <NavLink activeClassName="active" to="/AzureActiveDirectory">
            <li>Azure Active Directory</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
