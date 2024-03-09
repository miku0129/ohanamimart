import { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const HankoAuth = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  console.log("??", hankoApi)

  const redirectAfterLogin = useCallback(() => {
    navigate("/admin/dashboad");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return <hanko-auth />;
};

export default HankoAuth;
