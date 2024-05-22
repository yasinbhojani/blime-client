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
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const userObj = JSON.parse(decodedPayload);
    return userObj;
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return null;
  }
};
