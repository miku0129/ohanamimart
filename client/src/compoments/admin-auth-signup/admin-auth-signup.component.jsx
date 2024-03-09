import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAuthFormInput from "../admin-auth-form-input/admin-auth-form-input.component";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { redirect_url_after_login_or_signin } from "../../assets/page-assets";
import "./admin-auth-signup.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
  confirmPassword: "",
};

const AdminAuthSignup = () => {
  const [field, setField] = useState(defaultFormField);
  const { email, password, confirmPassword } = field;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      try {
        await createAuthUserWithEmailAndPassword(email, password);

        setField(defaultFormField); //フォームを初期化
      } catch (error) {
        console.log("error: ", error);
      }
      navigate(redirect_url_after_login_or_signin);
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };
  return (
    <div className="signupContainer">
      <div>
        <h4>アカウントを作成します</h4>
        <span>パスワードは6文字以上を指定してください</span>
        <form onSubmit={handleSubmit}>
          <AdminAuthFormInput
            label="email"
            inputOptions={{
              type: "email",
              required: true,
              onChange: handleChanges,
              name: "email",
              value: email,
            }}
          />

          <AdminAuthFormInput
            label="passowrd"
            inputOptions={{
              type: "password",
              required: true,
              onChange: handleChanges,
              name: "password",
              value: password,
            }}
          />

          <AdminAuthFormInput
            label="confirmPassword"
            inputOptions={{
              type: "password",
              required: true,
              onChange: handleChanges,
              name: "confirmPassword",
              value: confirmPassword,
            }}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuthSignup;
