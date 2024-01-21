import instance from "../config.axios";

export const tripDetails = async (tripId) =>
  await instance.get(`/Trips/${tripId}`);

export const removeTrip = async (tripId) =>
  await instance.delete(`/Admin/Trips/Profile/${tripId}`);
