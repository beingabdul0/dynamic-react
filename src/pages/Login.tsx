import CButton from "../components/CButton";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
function Login() {
  return (
    <div className="App">
      <header>
        <h2>Login</h2>
      </header>
      <body className="card-body">
        <EmailInput value={""} placeHolder={"Enter Email"} />
        <PasswordInput value={""} placeHolder={"Enter Password"} />
        <CButton text={"Login"} themeColor={"success"}></CButton>
      </body>
    </div>
  );
}
export default Login;
