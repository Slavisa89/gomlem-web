import instance from "../config.axios";

export const profile = async () => await instance.get("/User/Profile");

export const emergencyContacts = async () =>
  await instance.get("/User/Profile/EmergencyContacts");
