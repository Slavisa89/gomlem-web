import instance from "../config.axios";

export const customersInfo = async () =>
  await instance.get("/Admin/Customers/Info");

export const customers = async (param) =>
  await instance.get("/Admin/Customers", { params: { ...param } });

export const supportInfo = async () =>
  await instance.get("/Admin/Support/Info");

export const tripsInfo = async () => await instance.get("/Admin/Trips/Info");

export const topLocations = async () =>
  await instance.get("/Admin/Customers/TopLocations");

export const customersDetails = async (userId) =>
  await instance.get(`/Admin/Customers/Details/${userId}`);

export const sendEmail = async ({ subject, userId, message }) =>
  await instance.post("/Admin/Customers/SendEmail", {
    subject: subject,
    receiversId: userId,
    body: message,
  });

export const customerId = async (params) =>
  await instance.get("/Admin/Customers/Id", {
    params: {
      ...params,
    },
  });

export const helpFromHomeProfiles = async (userId) =>
  await instance.get(`/Admin/Customers/HelpFromHomeProfiles/${userId}`);

export const customerTrips = async (userId) =>
  await instance.get(`/Admin/Customers/Trips/${userId}`);

export const helpRequests = async (userId) =>
  await instance.get(`/Admin/Customers/HelpRequests/${userId}`);

export const customerInbox = async (userId, params) =>
  await instance.get(`/Admin/Customers/Inbox/${userId}`, { params });

export const customerInboxChat = async (userId, chatId) =>
  await instance.get(`/Admin/Customers/Inbox/${userId}/Messages/${chatId}`);

export const bulletinList = async (userId) =>
  await instance.get(`/Admin/Customers/Bulletin/${userId}`);

export const bulletinDetails = async (userId) =>
  await instance.get(`/Admin/Customers/Bulletin/Details/${userId}`);

export const blockCustomer = async (userId) =>
  await instance.patch(`/Admin/Customers/Block/${userId}`);

export const unBlockCustomer = async (userId) =>
  await instance.patch(`/Admin/Customers/UnBlock/${userId}`);

// later fix bug api remove param in parameter 2 axios
export const helpRequestTable = async (param) => {
  return await instance.get("/Admin/HelpRequests", {
    params: param,
  });
};
export const analyze = async (location) =>
  await instance.get(`/Admin/HelpRequests/Analyze?location=${location}`);

export const helpRequestsInfo = async () =>
  await instance.get("/Admin/HelpRequests/Info");

export const helpRequestDetails = async (id) =>
  await instance.get(`/Admin/HelpRequests/${id}`);

export const removeHelpRequest = async (id) =>
  await instance.delete(`/Admin/HelpRequests/${id}`);

export const replies = async (replyId) =>
  await instance.get(`/Admin/HelpRequests/reply/${replyId}`, {
    params: { replyId: replyId, page: 1, size: 100 },
  });

// TODO: check for correct end point
export const adReportsData = async () => await instance.get("/Admin/AdReports");
