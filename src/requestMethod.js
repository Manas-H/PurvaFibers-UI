import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM5OWFkZDA3YjFjMTZiYTNiYzVlNDAiLCJpYXQiOjE2NjQ3MTk2MDYsImV4cCI6MTY3MzM1OTYwNn0.HUB7_QCx1uWcI63TehVluoKPz9uMYXdugwJj_w_mit8

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

export { publicRequest, userRequest };