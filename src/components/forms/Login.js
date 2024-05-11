import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./registration.css";
import BackHomeNav from "../navbar/BackHomeNav";
import { useDispatch } from "react-redux";
import { fetchCartAsync } from "../redux/cartReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", JSON.stringify(res.data));

      navigate("/");
      toast.success("Logged In SucessFully", {
        position: "top-center",
      });

      // Dispatch action to fetch cart items after successful login
      dispatch(fetchCartAsync());
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

  return (
    <div className="body">
      <BackHomeNav />
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
          {/* {console.log("User", data)} */}

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

            <div className="user__details details_pt">
              <div className="input__box">
                <span className="details">Password</span>
              </div>
              <input
                type="password"
                value={data.name}
                name="password"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
            </div>

            {error && <div className="error_msg">{error}</div>}
            <div className="button">
              <button>Login</button>
            </div>
          </div>
          <div className="right">
            <span>Do not have Account? - </span>
            <Link to="/register">register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
