import { useState } from "react";
// import { useDispatch } from "react-redux";

import { getAuth } from "firebase/auth";

// import FormInput from "../form-input/form-input.component";
// import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import AdminAuthFormInput from "../admin-auth-form-input/admin-auth-form-input.component";

import {
  auth,
  signInAuthUserEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

// import { setCurrentUser } from "../../store/user/user.action";
// import { SigninContainer } from "./sign-in-form.styles";

const defaultFormField = {
  email: "",
  password: "",
};

const AdminAuthSignin = () => {
  //   const dispatch = useDispatch();

  const [field, setField] = useState(defaultFormField);
  const { email, password } = field;

  const auth = getAuth();

  const resetFormFields = () => {
    setField(defaultFormField);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInAuthUserEmailAndPassword(auth, email, password);
      console.log("user.user", user.user);
      //   dispatch(setCurrentUser(user.user));
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
    // <SigninContainer>
    <div>
      <h2>Already have an account</h2>
      <span>Sing in with your email and password</span>
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
          {/* <Button type="submit">Signin</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            G signin
          </Button> */}
          <button type="submit">Signin</button>
          <button type="button" onClick={signInWithGoogle}>
            G signin
          </button>
        </div>
      </form>
    </div>

    // </SigninContainer>
  );
};

export default AdminAuthSignin;
