import React from "react";
import Navbar from "../Navbar/Navbar";
import { useGetvaleinput } from "../../hook/useGetvaleinput";
import axios from "../../Api";
import { toast } from "react-toastify";

const initialState = {
  UserName: "",
  FirstName: "",
  LastName: "",
  password: "",
  phones: "",
};

function Registir() {
  const { formdata, handleChange } = useGetvaleinput(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formdata,
      phones: [formdata.phones],
    };

    axios.post("/auth/user/sign-up", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Registir success");
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Registir</h2>
        <div className="form_wrapper">
          <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input
              required
              value={formdata.UserName}
              onChange={handleChange}
              type="text"
              placeholder="UserName"
              name="UserName"
            />
            <label>FirstName</label>
            <input
              required
              value={formdata.FirstName}
              onChange={handleChange}
              type="text"
              placeholder="FirstName"
              name="FirstName"
            />
            <label>LastName</label>
            <input
              required
              value={formdata.LastName}
              onChange={handleChange}
              type="text"
              placeholder="LastName"
              name="LastName"
            />
            <label>Password</label>
            <input
              required
              value={formdata.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
            />
            <label>Phone</label>
            <input
              required
              value={formdata.phones}
              onChange={handleChange}
              type="text"
              placeholder="Phone"
              name="phones"
            />
            <button type="submit">Registir</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registir;
