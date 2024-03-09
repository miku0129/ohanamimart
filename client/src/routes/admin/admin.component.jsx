import { useState, useEffect } from "react";
import AdminAuth from "../admin-auth/admin-auth.component";
import AdminDashboad from "../admin-dashboad/admin-dashboad.component";
import { auth } from "../../utils/firebase/firebase.utils";

const Admin = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkLogin = () => {
      const currentUser = auth.currentUser;
      setUser(currentUser);
    };
    checkLogin();
  }, [user]);

  console.log("user", user);

  return (
    <div>
      {!user && <AdminAuth setUser={setUser} />}
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
