import axios from "axios";
import allStore from "../index.js";

export const fetchHomestayDetail = (id) => {
  return (dispatch) => {
    dispatch(allStore.setLoading(true));
    axios
      .get(`http://54.179.25.66/homestays/${id}`)
      .then((data) => {
        console.log(data.data.data);
        dispatch(setHomestayDetail(data.data.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispatch(allStore.setLoading(false)));
  };
};

export const setHomestayDetail = (payload) => {
  return {
    type: "SET_DETAIL_HOMESTAY",
    payload,
  };
};
