import { ToastError } from "../../components/Alert";

export function convertDateFormat(inputDate) {
  const dateObject = new Date(inputDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(dateObject);

  return formattedDate;
}

export function alertError(response, customMessage = {}) {
  // default message error
  const messages = {
    401: "You do not have access",
    403: "access forbidden 403",
    404: "Not Found 404",
    500: "Please try again later",
    415: "cannot connect to server",
    ...customMessage,
  };
  // Mode Debug for other check status
  if (!messages[response.status]) {
    console.log(response);
  }

  // Show Toast Message
  const toastMessage = messages[response.status]
    ? messages[response.status]
    : `Unknown error code Error : ${response.status}`;
  ToastError.fire({
    icon: "error",
    title: toastMessage,
  });
}
