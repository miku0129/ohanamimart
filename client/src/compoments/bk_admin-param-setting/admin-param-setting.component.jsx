import { useNavigate } from "react-router-dom";
import HankoProfile from "../../hanko/hanko-profile/hanko-profile.component";

const AdminParamSetting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        戻る
      </button>

      <HankoProfile />
    </div>
  );
};

export default AdminParamSetting;
