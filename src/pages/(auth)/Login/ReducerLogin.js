export function reducerLogin(state, action) {
  switch (action.type) {
    case "SEND_MOBILE": {
      return {
        ...state,
        isDisableMobile: false,
        isDisableOtp: true,
        isDisableBtn: false,
        isDisableBack: true,
        activeBack: false,
        activeOtp: false,
        step: "Send_Mobile",
      };
    }
    case "IS_LOADING": {
      return {
        ...state,
        isDisableMobile: true,
        isDisableOtp: true,
        isDisableBtn: true,
        isDisableBack: true,
      };
    }
    case "SEND_OTP": {
      return {
        ...state,
        isDisableOtp: false,
        isDisableBtn: false,
        isDisableBack: false,
        activeBack: true,
        activeOtp: true,
        step: "Send_Otp",
      };
    }
  }
}

export const initialArg = {
  isDisableMobile: false,
  isDisableOtp: true,
  isDisableBtn: false,
  isDisableBack: true,
  activeBack: false,
  activeOtp: false,
  step: "Send_Mobile",
};
export const ACTIONS = {
  SEND_MOBILE: "SEND_MOBILE",
  IS_LOADING: "IS_LOADING",
  SEND_OTP: "SEND_OTP",
};
