import axios from "axios";
import allStore from "../index.js";

export const postLogin = (payload) => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    console.log("2.masuk Action");
    console.log(payload);
    axios
      .post("https://peaceful-citadel-71310.herokuapp.com/signin", payload)
      .then((response) => {
        console.log("3, Masuk Then", response);
        console.log(response.data.message);
        console.log(response.data.token);

        // dispacth(setDetails());
      })
      .catch((err) => {
        console.log("3, Masuk err", err.response.data.message);
        allStore.setError(err.response.data.message);
      })
      .finally((_) => dispacth(allStore.setLoading(false)));
  };
};

export const setLogin = (payload) => {
  return {
    type: "SET_LOGIN",
    payload,
  };
};
