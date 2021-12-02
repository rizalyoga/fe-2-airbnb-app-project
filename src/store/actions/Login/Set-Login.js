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
    // dispacth(allStore.setError(null));
    console.log("2.masuk Action");
    console.log(payload);
    axios
      .post("http://18.141.192.116/signin", payload)
      .then((response) => {
        console.log("3, Masuk Then", response.data.data);
        swal(response.data.message);
        console.log("INI TOKEN", response.data);
        token = response.data.data.Token;
        dispacth(allStore.setUser(response.data.data));

        // menyimpan token ke local storage

        if (response.data.data !== null) {
          localStorage.setItem("token", response.data.data.Token);
        }

        localStorage.setItem("token", token);
        // window.location.reload();
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
