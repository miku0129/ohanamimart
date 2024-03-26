import { auth, signOutUser } from "../../utils/firebase/firebase.utils";
import { CustomBtnGroup } from "../../component-utils/component-utils.styles";
import Button from "react-bootstrap/Button";
import "./admin-header.styles.scss";

const AdminHeader = ({ props }) => {
  const { setAdmin, shopName } = props;

  const signOut = async () => {
    await signOutUser();
    setAdmin(auth.currentUser);
    alert("Signout succeed");
  };

  return (
    <div>
      <CustomBtnGroup>
        <h3>Hello, {shopName}</h3>
        <div className="hankoLogoutBtn-style">
          <Button variant="outline-secondary" onClick={signOut}>
            Sign out
          </Button>
        </div>
      </CustomBtnGroup>
    </div>
  );
};

export default AdminHeader;
