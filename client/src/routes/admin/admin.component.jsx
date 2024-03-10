import { useState, useEffect } from "react";
import AdminAuthSignin from "../../compoments/admin-auth-signin/admin-auth-signin.component";
import AdminAuthSignup from "../../compoments/admin-auth-signup/admin-auth-signup.component";
import AdminDashboad from "../../compoments/admin-dashboad/admin-dashboad.component";
import {onAuthStateChangedListener  } from "../../utils/firebase/firebase.utils";
import "./admin.styles.scss";

const Admin = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    onAuthStateChangedListener((currentUser)=>{
      if (currentUser) {
            setAdmin(currentUser);
            console.log("signin");
          } else {
            setAdmin(null);
            console.log("signout");
          }
    })
  }, []);

  return (
    <div>
      {!admin && (
        <div className="authenticationContainer">
          <AdminAuthSignup setAdmin={setAdmin} />
          <AdminAuthSignin setAdmin={setAdmin} />
        </div>
      )}
      {admin && <AdminDashboad props={{ setAdmin: setAdmin, admin: admin }} />}
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
