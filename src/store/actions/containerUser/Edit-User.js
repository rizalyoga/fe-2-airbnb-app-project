import React from "react";
import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";
// import { token } from "../Login/Set-Login.js";

// setting beareer

export const postEditUser = (payload) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    // dispatch(allStore.setError(null));
    console.log("2.masuk Action Edit INI");
    console.log(payload);
    axios
      .put("http://18.141.192.116/jwt/users", payload, config)
      .then((response) => {
        console.log("3, Masuk Then", response.data);
        swal(response.data.message);
        allStore.setUser(response.data.data);

        // window.location.reload();
      })
      .catch((err) => {
        console.log("3, Masuk ERROR:", err);
        swal(err.response.data.message);
        // allStore.setError(err.response.data.message);
        // dispatch(allStore.setError(err.response.data.message));
      })
      .finally((_) => dispatch(allStore.setError({})));
  };
};

export const setEditUser = (payload) => {
  return {
    type: "SET_EDIT_USER",
    payload,
  };
};
