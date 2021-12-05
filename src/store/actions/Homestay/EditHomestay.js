import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const EditHomestay = (payload, id) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    console.log("2.masuk Action Add Homestay");
    console.log(payload);

    axios
      .put(`http://18.141.192.116/jwt/homestays/${id}`, payload, config)
      .then((response) => {
        console.log("3, Masuk Then", response.data.data);
        swal(response.data.message);
        // dispatch(allStore.setUser(response.data.data));
      })
      .catch((err) => {
        console.log("3, Masuk ERROR:", err.response.data.message);
        swal(err.response.data.message);
        // dispatch(allStore.setError(err.response.data.message));
        // allStore.setError(err.response.data.message);
      })
      .finally((_) => dispatch(allStore.setLoading(false)), dispatch(allStore.setError({})));
  };
};

export const setEditHomestay = (payload) => {
  return {
    type: "SET_EDIT_HOMESTAY",
    payload,
  };
};
