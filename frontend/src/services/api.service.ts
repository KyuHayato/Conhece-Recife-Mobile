import axios, { AxiosInstance } from "axios";

// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false, // (NOTE: this will disable client verification)
//   cert: fs.readFileSync("./usercert.pem"),
//   key: fs.readFileSync("./key.pem"),
//   passphrase: "YYY",
// });

const api: AxiosInstance = axios.create({
  baseURL: "https://172.20.240.1:3000",
});

export default api;
