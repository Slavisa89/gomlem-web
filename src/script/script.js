export function getFormattedDate(offset) {
  const today = new Date();
  today.setDate(today.getDate() - offset);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatterLastSeen(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const inputDate = new Date(date);

  const timeDifference = currentDate - inputDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds <= 10) return "Just Now";
  if (seconds < 50) return "A few seconds ago";
  if (minutes < 50) return "A few minutes ago";
  if (minutes < 2) return "1 hour ago";
  if (hours < 24) return `${hours} hours ago`;
  if (days < 2) return "Yesterday";
  if (days < 8) return daysOfWeek[inputDate.getDay()];
  if (weeks < 2) return "1 week ago";
  if (weeks < 4) return `${weeks} weeks ago`;
  if (months < 2) return "1 month ago";
  if (months < 4) return `${months} weeks ago`;
  if (years < 2) return "1 year ago";
  if (years < 5) return `${years} years ago`;

  return "Long time ago";
}

export function formatterString(str, length = 12) {
  if (!str) return;
  if (str.length > length) {
    const newString = str;
    return newString.substring(0, length) + "...";
  }
  return str;
}

export function formatDate(date) {
  if (typeof date == "string") date = new Date(date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear() % 100;

  const formattedDate =
    month.toString().padStart(2, "0") +
    "/" +
    day.toString().padStart(2, "0") +
    "/" +
    year.toString().padStart(2, "0");
  return formattedDate;
}

export function convertDateFormat(inputDate) {
  const dateObject = new Date(inputDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(dateObject);

  return formattedDate;
}

export function getTime(inputDateTime) {
  const inputDate = new Date(inputDateTime);
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const outputTime = formatTime(hours, minutes);

  return outputTime;
}
function formatTime(hours, minutes) {
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

  return formattedTime;
}

export function getLocationAccess() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      },
      (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

export const cleanObj = (obj) => {
  const cleanedObj = {};
  for (const key in obj) {
    if (obj[key]) {
      cleanedObj[key] = obj[key];
    }
  }
  return cleanedObj;
};
