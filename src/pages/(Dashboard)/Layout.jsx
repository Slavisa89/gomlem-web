import { Outlet } from "react-router-dom";
import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import FadeDiv from "@animation/FadeDiv";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "@services/scripts/token";

export default function Layout() {
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  });
  return (
    <>
      {token && (
        <div className="flex">
          <Sidebar />
          <div className="overflow-hidden grow">
            <div className="flex flex-col">
              <Header />
              <FadeDiv time={1} className="">
                <Outlet />
              </FadeDiv>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
