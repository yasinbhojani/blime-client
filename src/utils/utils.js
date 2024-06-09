export const generateRandomNoFromRange = (startNum, endNum) => {
  return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
};

export const handelLogout = () => {
  localStorage.removeItem("token");
  window.location.reload(); // {/auth/login}
};

export const decodeJWT = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return;
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const userObj = JSON.parse(decodedPayload);
    return userObj;
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return null;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
