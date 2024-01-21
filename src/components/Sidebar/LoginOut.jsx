import { reqRevoke } from "@services/auth/auth.js";
import { removeToken } from "@services/scripts/token";
import Icon from "@components/Icon";
import { useNavigate } from "react-router";
export default function LoginOut() {
  const navigate = useNavigate();
  return (
    <button
      className="flex gap-4 p-[10px] border-l border-transparent items-center"
      onClick={() => {
        reqRevoke();
        removeToken();
        navigate("/login");
      }}
    >
      <Icon name="logOut" />
      <span>Logout</span>
    </button>
  );
}
