export function setToken(data) {
  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
}
export function getToken() {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!accessToken) return null;
  return { accessToken, refreshToken };
}
export function removeToken() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}
