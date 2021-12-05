import axios from "axios";
import allStore from "../index.js";

export const fetchHomestay = () => {
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`http://54.179.25.66/homestays`)
      .then((data) => {
        console.log(data.data.data);
        dispatch(setHomestay(data.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setHomestay = (payload) => {
  return {
    type: "SET_LIST_HOMESTAY",
    payload,
  };
};
