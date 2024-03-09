import { useState, useEffect } from "react";
import AdminAuthSignin from "../../compoments/admin-auth-signin/admin-auth-signin.component";
import AdminAuthSignup from "../../compoments/admin-auth-signup/admin-auth-signup.component";
import AdminDashboad from "../../compoments/admin-dashboad/admin-dashboad.component";
import { auth } from "../../utils/firebase/firebase.utils";
import "./admin.styles.scss"

const Admin = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkLogin = () => {
      const currentUser = auth.currentUser;
      setUser(currentUser);
    };
    checkLogin();
  }, [user]);

  return (
    <div>
      {!user && (
        <div className="authenticationContainer">
          <AdminAuthSignup setUser={setUser}/>
          <AdminAuthSignin setUser={setUser}/>
        </div>
      )}
      {user && <AdminDashboad setUser={setUser} />}
    </div>
    // <Routes>
    //   <Route index element={<AdminAuth />} />

    //   <Route path="dashboad/*" element={<AdminDashboad />} />
    //   <Route
    //     path="dashboad/product/edit/:product_id"
    //     element={<AdminProductEdit />}
    //   />
    // </Routes>
  );
};

export default Admin;
