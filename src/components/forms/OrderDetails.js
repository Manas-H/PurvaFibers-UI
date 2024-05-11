import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOfAddress } from ".././redux/actions/addressAction";

const axios = require("axios");
const OrderDetails = ({ handleCloseModal, setIsAddressSubmitted }) => {
  const dispatch = useDispatch();
  const ReduxAddress = useSelector((state) => state.address);
  const [address, setAddress] = useState({
    street: ReduxAddress.street || "",
    city: ReduxAddress.city || "",
    state: ReduxAddress.state || "",
    zip: ReduxAddress.zip || "",
    country: ReduxAddress.country || "India",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    // Add more popular countries here...
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error when the user starts typing again
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is address: ", address);
    const validationErrors = validateForm(address);
    setErrors(validationErrors);
    console.log(errors);
    console.log("Form submitted successfully:");
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      setIsSubmitting(true);
      console.log("Form submitted successfully:", address);

      setIsAddressSubmitted(true);
      // Clear form fields after successful submission
      setAddress({
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      });
      setIsSubmitting(false);
      dispatch(setOfAddress(address));
      console.log("Form submitted successfully:");

      setTimeout(() => {
        setIsSubmitting(false);
        setIsAddressSubmitted(true);
        handleCloseModal();
      }, 1000);
    }
  };

  const fetchAddressDetails = async () => {
    try {
      const response = await axios.get(
        "https://india-pincode-api.p.rapidapi.com/v1/in/places/pincode",
        {
          params: {
            pincode: address.zip,
          },
          headers: {
            "X-RapidAPI-Key":
              "415347fdacmsh80e2f6b6508f47bp123ba3jsn6db232b7306e",
            "X-RapidAPI-Host": "india-pincode-api.p.rapidapi.com",
          },
        }
      );
      console.log("Address details:", response.data);
      const { result } = response.data;
      if (result.length > 0) {
        const { statename, placename } = result[0];
        setAddress({
          ...address,
          state: statename,
          city: placename,
        });
      }
    } catch (error) {
      console.error("Error fetching address details:", error);
    }
  };

  const handleZipCodeChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });

    fetchAddressDetails();
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.street.trim()) {
      errors.street = "Street is required";
    }
    if (!data.city.trim()) {
      errors.city = "City is required";
    }
    if (!data.state.trim()) {
      errors.state = "State is required";
    }
    if (!data.zip.trim()) {
      errors.zip = "ZIP Code is required";
    } else if (!/^\d{3,}$/.test(data.zip.trim())) {
      errors.zip = "ZIP Code must number";
    }
    if (!data.country.trim()) {
      errors.country = "Country is required";
    }
    return errors;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "1em",
          maxWidth: "90%",
          maxHeight: "90%",
          overflow: "auto",
        }}
      >
        <button onClick={handleCloseModal} className="bg-black text-white px-5">
          Close
        </button>
        <div className="bg-white shadow-lg rounded-md">
          <form onSubmit={handleSubmit} className="text-black grid  p-3 my-2">
            <label>
              ZIP Code:
              <input
                className="border m-1"
                type="text"
                name="zip"
                value={address.zip}
                onChange={handleZipCodeChange}
                required
              />
              {errors.zip && <span className="error">{errors.zip}</span>}
            </label>
            <label className="">
              Street:
              <input
                className="border m-1"
                type="text"
                name="street"
                value={address.street}
                onChange={handleChange}
                required
              />
              {errors.street && <span className="error">{errors.street}</span>}
            </label>
            <label>
              City:
              <input
                className="border m-1"
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </label>
            <label>
              State:
              <input
                className="border m-1"
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
              />
              {errors.state && <span className="error">{errors.state}</span>}
            </label>

            <label>
              Country:
              <select
                name="country"
                className="border m-1"
                value={address.country}
                onChange={handleChange}
                required
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </label>
            {address.country === "Other" && (
              <label>
                Other Country:
                <input
                  type="text"
                  className="border m-1"
                  name="country"
                  value={address.country}
                  onChange={handleChange}
                  required
                />
                {errors.country && (
                  <span className="error">{errors.country}</span>
                )}
              </label>
            )}
            <div className="w-full flex justify-center ">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
