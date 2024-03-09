import { useState } from "react";
import { getAuth } from "firebase/auth";
import AdminAuthFormInput from "../admin-auth-form-input/admin-auth-form-input.component";
import { signInAuthUserEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./admin-auth-signin.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const AdminAuthSignin = ({setUser}) => {
  const [field, setField] = useState(defaultFormField);
  const { email, password } = field;

  const auth = getAuth();

  const resetFormFields = () => {
    setField(defaultFormField);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInAuthUserEmailAndPassword(auth, email, password);
      setUser(user.user)
      alert("login succeed");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log("error: ", error);
      }
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };

  return (
    <div className="signinContainer">
      <h4>サインインします</h4>
      <span>Emailアドレスとパスワードが必要です</span>
      <form onSubmit={handleSubmit}>
        <AdminAuthFormInput
          label="email"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChanges,
            name: "email",
            value: email,
          }}
        />
        <AdminAuthFormInput
          label="password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChanges,
            name: "password",
            value: password,
          }}
        />
        <div className="buttons-container">
          <button type="submit">Signin</button>
        </div>
      </form>
    </div>
  );
};

export default AdminAuthSignin;
