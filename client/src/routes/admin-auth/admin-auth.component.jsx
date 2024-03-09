import { useState } from "react";
import AdminAuthSignup from "../../compoments/admin-auth-signup/admin-auth-signup.component";
import AdminAuthSignin from "../../compoments/admin-auth-signin/admin-auth-signin.component";
import "./admin-auth.styles.scss";

const AdminAuth = () => {
  const [admin, setAdmin] = useState(null);

  return (
    <div className="authenticationContainer">
      <AdminAuthSignup setAdmin={setAdmin} />
      <AdminAuthSignin setAdmin={setAdmin} />
    </div>
  );
};

export default AdminAuth;
