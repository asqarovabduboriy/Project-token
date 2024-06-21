import axios from "../../Api";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("/users/search", { params: { limit: 100 } })
      .then((res) => setProducts(res.data.data.users))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);
  const deleteUser = (id) => {
    axios
      .delete(`/users/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  let data = products?.map((user) => (
    <div key={user.id} className="user">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      <h1>{user.FirstName}</h1>
      <p>{user.LastName}</p>
      <div className="user_text">
        <p>{user.role}</p>
        <p>{user.status}</p>
        <p>{user.phones[0]}</p>

        <div className="user_btn">
            <button className="delete" onClick={() => deleteUser(user.id)}>delete</button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section id="product">
        <div className="container">
          <h1 className="title">{user.role === "admin" ? "Admin" : "User"}</h1>
          <div className="userWrapper">{data}</div>
        </div>
      </section>
    </>
  );
};

export default Product;
