// import SignUpForm from "../../compoments/sign-up-form/sign-up-form.component";
// import SignInForm from "../../compoments/sign-in-form/sign-in-form.component";
import AdminAuthSignup from "../../compoments/admin-auth-signup/admin-auth-signup.component";
import AdminAuthSignin from "../../compoments/admin-auth-signin/admin-auth-signin.component";


// import { AuthenticationContainer } from "./authentication.styles";

const AdminAuth = () => {
  return (
    // <AuthenticationContainer>
    //   <SignInForm />
    //   <SignUpForm />
    // </AuthenticationContainer>
    <div>
      <AdminAuthSignup />
      <AdminAuthSignin />
    </div>
  );
};

export default AdminAuth;
