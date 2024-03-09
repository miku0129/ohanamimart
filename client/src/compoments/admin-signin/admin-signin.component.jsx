import HankoAuth from "../../hanko/hanko-auth/hanko-auth.component"

const AdminSignin = () => {
  const hankoApi = process.env.REACT_APP_HANKO_API_URL;
console.log("??", hankoApi)

  return (
    <div>
      <HankoAuth />
    </div>
  );
};

export default AdminSignin;
