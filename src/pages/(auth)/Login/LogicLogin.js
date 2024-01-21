import { setToken } from "@services/scripts/token";
import { reqLogin, reqVerifyOtp } from "@services/auth/auth.js";
import { ACTIONS } from "./ReducerLogin";
import { jwtDecode } from "jwt-decode";

export async function sendMobile(mobile) {
  try {
    const res = await reqLogin(mobile);
    if (res.status == 200) {
      return { action: ACTIONS.SEND_OTP };
    }
  } catch (error) {
    const { status } = error.response;
    const { message } = error;
    if (status == 404) {
      console.log(message);
      return {
        action: ACTIONS.SEND_MOBILE,
        toast: {
          icon: "error",
          title: "There is no user with this number",
        },
      };
    } else if (status == 422) {
      console.log(message);
      return {
        action: ACTIONS.SEND_MOBILE,
        toast: {
          icon: "error",
          title: "Please try again",
        },
      };
    } else if (status == 400) {
      console.log(message);
      return {
        action: ACTIONS.SEND_MOBILE,
        toast: {
          icon: "error",
          title: "The number entered is incorrect",
        },
      };
    } else {
      console.log(message);
      return {
        action: ACTIONS.SEND_MOBILE,
        toast: {
          icon: "error",
          title: "Unknown error",
        },
      };
    }
  }
}

export async function sendOtp(mobile, otp) {
  try {
    const res = await reqVerifyOtp(mobile, otp);
    if (res.status == 200) {
      return checkAccess(res);
    }
  } catch (error) {
    const { status } = error.response;
    const { message } = error;
    if (status == 404) {
      console.log(message);
      return {
        action: ACTIONS.SEND_OTP,
        toast: {
          icon: "error",
          title: "Please try again",
        },
      };
    } else if (status == 422) {
      console.log(message);
      return {
        action: ACTIONS.SEND_OTP,
        toast: {
          icon: "error",
          title: "Code is wrong",
        },
      };
    } else {
      console.log(message);
      return {
        action: ACTIONS.SEND_OTP,
        toast: {
          icon: "error",
          title: "Unknown error",
        },
      };
    }
  }
}

async function checkAccess(res) {
  const { data } = res;
  const { role } = jwtDecode(data.accessToken);
  if (role != "Admin") {
    return {
      action: ACTIONS.SEND_OTP,
      toast: {
        icon: "error",
        title: "You do not have Admin Access",
      },
    };
  }
  setToken(res.data);
  return "Verified"
}
