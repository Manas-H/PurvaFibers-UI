import React, { useState } from "react";
import "./registration.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BackHomeNav from "../navbar/BackHomeNav";

const RegisterationModal = () => {
  // const [user, setUser] = useState({
  const [data, setData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    reEnterPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);

  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };

  // const register = () => {
  //   const { name, email, tel, password, reEnterPassword } = user;
  //   console.log(user);
  //   if (name && email && tel && password === reEnterPassword) {
  //     // alert('posted');
  //     axios.post("http://localhost:5000/register", user).then((res) => {
  //       alert(res.data.message);
  //       // history.push("/login");
  //     });
  //   } else {
  //     alert("invalid input");
  //   }
  // };
  return (
    <div className="body">
      <BackHomeNav />
      {/* <div className="heading-nav">
      <FaArrowLeft />
      <h2>Home</h2>
      </div> */}
      <div className="container">
        <div className="title">
          <Link to="/register" className="link">
            <div className="register link_path">Register</div>
          </Link>

          <Link to="/login" className="link">
            <div className="login link_path">Login</div>
          </Link>
        </div>
        <form method="register" onSubmit={handleSubmit}>
          {console.log("User", data)}

          <div className="user__details details_pt">
            <div className="input__box">
              <span className="details">Full Name</span>
            </div>
            <input
              type="text"
              value={data.name}
              name="name"
              placeholder="Enter your Full Name"
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="user__details">
              <div className="input__box">
                <span className="details">Email</span>
              </div>
              <input
                type="text"
                value={data.email}
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="user__details">
              <div className="input__box">
                <span className="details">Mobile Number</span>
              </div>
              <input
                type="tel"
                value={data.tel}
                name="tel"
                placeholder="Enter Phone Number"
                // pattern="7/8/9-[0-9]"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="con">
            <div className="user__details pass pr-2">
              <div className="input__box">
                <span className="details">Password</span>
              </div>
              <input
                type="password"
                value={data.password}
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="user__details pass">
              <div className="input__box">
                <span className="details">Confirm Password</span>
              </div>
              <input
                type="password"
                value={data.reEnterPassword}
                name="reEnterPassword"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {error && <div className="text-red-700">{error}</div>}
          <div className="button">
            <button>Register</button>
          </div>
          <div className="right">
            <span>Do not have Account? - </span>
            <Link to="/login">login</Link>
          </div>
          <div>
            {/* <span>Already have Account?</span>
            <Link to="/login">
              <span className="" type="button">
                Sign in
              </span>
            </Link> */}
          </div>

          {/* <div className="button" onClick={() => history.push("/login")}>
        Login
      </div> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterationModal;
