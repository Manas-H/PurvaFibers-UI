import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./profile.css";
import { persistor } from "../../redux/store";
import store from "../../redux/store";
import { clearCart } from "../../redux/cartReducer";

const Section = styled.div``;
const Left = styled.div`
  position: absolute;
  top:0;
  float: right;
  background: white;
  color: black
  height: fit-content;
  
  &::after{
    position: absolute;
    top: 380px;
    left: 261px;
    width: 0; 
    height: 0; 
    border-left: 8px solid rgba(255, 253, 250);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: '';
    display: block;
    z-index: 2;
    transition: all 200ms linear;
  }
`;
const ProfileDetails = styled.div`
  text-align: center;
  margin-top: 4vh;
  text-decoration: none;
`;
const ProfileTitle = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 300;
`;
const ProfileDetailsSection = styled.div`
  padding: 0vh 3vh;
  text-align: left;
  color: white;
  font-size: 25px;
  font-weight: 250;
`;
const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  color: black;
  padding-top: 50px;
`;
const Button = styled.div`
  display: flex;
  color: black;
  padding: 0 80px;
  margin-top: 60px;
  font-size: 23px;
  font-weight: 200;
  cursor: pointer;
  margin-bottom: 5vh;
`;
const Icon = styled.div`
  padding-right: 10px;
`;
const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    // localStorage.clear();
    console.log("the log out button is clcicked");
    localStorage.removeItem("token");
    store.dispatch(clearCart());
    persistor.purge();
    navigate("/login");
    toast.success("Logout Sucessfully", {
      position: "top-center",
    });
  };

  const handleClick = (event) => {
    event.stopPropagation();
  };
  return (
    <Section onClick={handleClick}>
      <Left>
        <ProfileDetails>
          <ProfileTitle>Account</ProfileTitle>
          <ProfileDetailsSection>
            <Link to="/profile" className="profiles-compo-link">
              <ProfileItem>
                <Icon>
                  <CgProfile />
                </Icon>
                My Profile
              </ProfileItem>
            </Link>

            <Link to="/orders" className="profiles-compo-link">
              <ProfileItem>My Orders</ProfileItem>
            </Link>
            <Link to="/about" className="profiles-compo-link">
              <ProfileItem>
                <Icon>
                  <FcAbout />
                </Icon>
                About
              </ProfileItem>
            </Link>
            <Link to="" className="profiles-compo-link">
              <ProfileItem>
                <Icon>
                  <BiSupport />
                </Icon>
                Support
              </ProfileItem>
            </Link>
          </ProfileDetailsSection>
          <Button onClick={logout}>
            <Icon>
              <AiOutlineLogout />
            </Icon>
            <button onClick={logout}>Logout</button>
          </Button>
        </ProfileDetails>
      </Left>
    </Section>
  );
};

export default Profile;
