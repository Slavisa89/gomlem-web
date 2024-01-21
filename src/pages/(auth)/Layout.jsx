import { Outlet, useNavigate } from "react-router-dom";
import FadeDiv from "@animation/FadeDiv";
import Img from "@components/Img";
import { getToken } from "@services/scripts/token";
import { useEffect } from "react";
export default function Layout() {
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    if (token) {
      return navigate("/");
    }
  });
  return (
    <>
      {!token && (
        <div>
          <Img
            src="logo"
            alt="Logo Gomlem"
            className="fixed top-[84px] left-[70px] w-[248px]"
          />
          <div className="w-full h-screen flex justify-center items-center">
            <FadeDiv time={3}>
              <Outlet />
            </FadeDiv>
          </div>
        </div>
      )}
    </>
  );
}
