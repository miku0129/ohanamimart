import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const HankoLogoutBtn = () => {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      navigate("/admin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
};

export default HankoLogoutBtn;
