import React from "react";
import "./index.css";
import { useSearchParams } from "react-router-dom";

const VaultAppRoles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const data = searchParams.get("data");
  return (
    <section className="main">
      <h4>
        Vault AppRoles <br></br>
        data = {data}
      </h4>
    </section>
  );
};

export default VaultAppRoles;