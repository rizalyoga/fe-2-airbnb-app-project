import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export let token = "";

// setting beareer
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

export const postLogin = (payload) => {
  localStorage.clear();

  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    dispacth(allStore.setError(null));
    console.log("2.masuk Action");
    console.log(payload);
    axios
      .post("http://18.141.192.116/login", payload)
      .then((response) => {
        console.log("3, Masuk Then", response.data.data);
        token = response.data.data;
        swal(response.data.message);
        // menyimpan token ke local storage
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log("3, Masuk ERROR:", err.response.data.message);
        swal(err.response.data.message);
        // dispacth(allStore.setError(err.response.data.message));
        allStore.setError(err.response.data.message);
      })
      .finally((_) => dispacth(allStore.setError({})));
  };
};

export const setLogin = (payload) => {
  return {
    type: "SET_LOGIN",
    payload,
  };
};
