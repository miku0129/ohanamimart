import { useState } from "react";

// import FormInput from "../form-input/form-input.component";
// import Button from "../button/button.component";
import AdminAuthFormInput from "../admin-auth-form-input/admin-auth-form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  //   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// import { SignupContainer } from "./sign-up-form.styles";

const defaultFormField = {
  //   displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AdminAuthSignup = () => {
  const [field, setField] = useState(defaultFormField);
  //   const { displayName, email, password, confirmPassword } = field;
  const { email, password, confirmPassword } = field;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      try {
        // const { user } = await createAuthUserWithEmailAndPassword(
        //   email,
        //   password
        // );
        // await createUserDocumentFromAuth(user, { displayName });
        await createAuthUserWithEmailAndPassword(email, password);

        setField(defaultFormField); //フォームを初期化
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value }); //オブジェクト要素を更新
  };
  return (
    // <SignupContainer>
    <div>
      <h2>Don't have an accont?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* <FormInput
          label="displayName"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChanges,
            name: "displayName",
            value: displayName,
          }}
        /> */}

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
        {/* </Button> */}
      </form>
    </div>
    // </SignupContainer>
  );
};

export default AdminAuthSignup;
