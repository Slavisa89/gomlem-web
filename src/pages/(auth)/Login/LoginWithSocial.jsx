import Icon from "@components/Icon"
export default function LoginWithSocial() {
  return (
    <div>
      <div className="flex gap-2 w-full items-center mt-11">
        <hr className="bg-light-400 h-[3px] block w-full" />
        <a className="text-nowrap text-[10px] text-text-lighter">Or Login Through</a>
        <hr className="bg-light-400 h-[3px] block w-full" />
      </div>
      <div className="mt-[30px] flex gap-2">
        <a href="#" className="btn-login-social">
          <Icon name="google" className="w-5" />
        </a>
        <a href="#" className="btn-login-social">
          <Icon name="apple" className="w-5" />
        </a>
        <a href="#" className="btn-login-social">
          <Icon name="facebook" className="w-5" />
        </a>
      </div>
    </div>
  );
}
