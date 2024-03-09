import { useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const HankoAuth = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    try {
      console.log("redirectAfterLogin is work");

      navigate("/admin/dashboad");
    } catch (e) {
      console.log(`error: ${e} `);
    }
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        try {
          console.log("onAuthFlowCompleted is work");

          redirectAfterLogin();
        } catch (e) {
          console.log(`error: ${e} `);
        }
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
