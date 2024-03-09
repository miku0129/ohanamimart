import AdminAuthSignup from "../../compoments/admin-auth-signup/admin-auth-signup.component";
import AdminAuthSignin from "../../compoments/admin-auth-signin/admin-auth-signin.component";
import "./admin-auth.styles.scss";

const AdminAuth = ({ setUser }) => {
  return (
    <div className="authenticationContainer">
      <AdminAuthSignup setUser={setUser} />
      <AdminAuthSignin setUser={setUser} />
    </div>
  );
};

export default AdminAuth;
