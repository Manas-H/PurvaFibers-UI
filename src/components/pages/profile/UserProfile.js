import React, { useState, useEffect } from "react";
import "./profile.css";
import Navigationbar from "../../Navigationbar";

const UserProfile = () => {
  const [items, setItems] = useState({ name: "", tel: "", email: "" });

  const handleNameChange = (e) => {
    setItems({ ...items, name: e.target.value });
  };

  const handleNumberChange = (e) => {
    setItems({ ...items, tel: e.target.value });
  };

  const handleEmailChange = (e) => {
    setItems({ ...items, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("token"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <div className="profi">
      <Navigationbar />
      <div className="cardd">
        <div className="card-body">
          <div className="avatar">
            <img src="" className="card-img-top" alt="" />
          </div>
          <form onSubmit={handleSubmit} className="p-3">
            <label className="flex items-center justify-center">
              <p className="w-20 m-0 px-[14px] mr-2"> Name:</p>
              <input
                className="border bg-transparent px-2 m-2"
                type="text"
                value={items.name}
                onChange={handleNameChange}
              />
            </label>
            <label className="flex items-center justify-center">
              <p className="w-20 m-0 px-[14px] mr-2">Number:</p>
              <input
                className="border bg-transparent px-2 m-2"
                type="text"
                value={items.tel}
                onChange={handleNumberChange}
              />
            </label>
            <label className="flex items-center justify-center">
              <p className="w-20 m-0 px-[14px] mr-2">Email:</p>
              <input
                className="border bg-transparent px-2 m-2"
                type="text"
                value={items.email}
                onChange={handleEmailChange}
              />
            </label>
            <div className="w-full flex justify-center items-center mt-5">
              {" "}
              <button
                type="submit"
                value="Update"
                className="border px-4 py-1 bg-[#414f4f] curosr pointer hover:bg-black"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
