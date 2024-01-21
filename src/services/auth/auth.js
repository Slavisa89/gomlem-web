import instance from "../config.axios";
import { getToken } from "@services/scripts/token";

export async function reqVerifyOtp(phone, code) {
  return instance.post("/User/VerifyOtp", { phoneNumber: phone, otp: code });
}

export async function reqLogin(phone) {
  return instance.post("/User/Login", { phoneNumber: phone });
}

export async function reqRevoke() {
  const token = getToken();
  return instance.post("/User/RevokeAll", { refreshToken: token.refreshToken });
}
