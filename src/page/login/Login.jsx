import React, { useEffect } from "react";
import axios from "../../Api/index";
import { useGetvaleinput } from "../../hook/useGetvaleinput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const instalstation = {
  UserName: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { formdata, handleChange } = useGetvaleinput(instalstation);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("/auth/sign-in", formdata)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        navigate('/'); 
        window.location.reload();
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };


  return (
    <>
      <div className="form_wrapper">
        <div>
          <p>john32: cod:12345678 -admin</p>
          <p>iskandar: cod:12345678 -user</p>
        </div>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <label>username</label>
          <input
            value={formdata.UserName}
            onChange={handleChange}
            name="UserName"
            type="text"
            placeholder="username"
          />
          <label>password</label>
          <input
            value={formdata.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
