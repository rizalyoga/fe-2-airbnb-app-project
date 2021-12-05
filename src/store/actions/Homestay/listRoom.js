import axios from "axios";
import allStore from "../index.js";

export const fetchRooms = () => {
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`http://54.179.25.66/rooms`)
      .then((data) => {
        console.log(data.data.data);
        dispatch(setRooms(data.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setRooms = (payload) => {
  return {
    type: "SET_LIST_ROOMS",
    payload,
  };
};
