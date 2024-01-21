import Icon from "@components/Icon";
import LoginForm from "./LoginFrom";


export default function Login() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-[65px] h-[65px] bg-light-100 rounded-full flex justify-center items-center mb-6">
        <Icon name="login" />
      </div>
      <h2 className="text-4xl font-semibold text-text mb-10">Welcome Back!</h2>
      <LoginForm />
    </div>
  );
}
