import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../../component-utils/component-utils.styles";

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

  return <CustomBtn onClick={logout}>Logout</CustomBtn>;
};

export default HankoLogoutBtn;
