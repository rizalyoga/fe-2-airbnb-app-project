import axios from "axios";
import allStore from "../index.js";
import swal from "sweetalert";

export const addRoom = (payload, id) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    console.log("2.masuk Action Add Homestay");
    console.log(payload);
    axios
      .post(`http://18.141.192.116/jwt/rooms/${id}`, payload, config)
      .then((response) => {
        console.log("3, Masuk Then", response.data.data);
        swal(response.data.message);
        dispatch(allStore.setAddRoom(response.data.data));
      })
      .catch((err) => {
        console.log("3, Masuk ERROR:", err.response);
        swal(err.response);
        // allStore.setError(err.response.data.message);
      })
      .finally((_) => dispatch(allStore.setLoading(false)), dispatch(allStore.setError({})));
  };
};

export const setAddRoom = (payload) => {
  return {
    type: "SET_ADD_ROOM",
    payload,
  };
};
