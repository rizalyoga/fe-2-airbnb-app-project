import { postLogin, setLogin } from "./Login/Set-Login.js";
import setLoading from "./setLoading.js";
import setError from "./setError.js";
import setUser from "./containerUser/Set-User.js";
import { postEditUser, setEditUser } from "./containerUser/Edit-User.js";
import { fetchHomestay, setHomestay } from "./Homestay/listHome.js";
import { fetchHomestayDetail, setHomestayDetail } from "./Homestay/getDetailHomestay.js";
import { fetchRooms, setRooms } from "./Homestay/listRoom";
import { addHomestay, setAddHomestay } from "./Homestay/addHomestay.js";
import { addRoom, setAddRoom } from "./Homestay/addRoom.js";

const allStore = {
  postLogin,
  setLogin,
  setLoading,
  setError,
  setUser,
  postEditUser,
  setEditUser,
  //get all homestay
  fetchHomestay,
  setHomestay,
  //get detail homestay
  fetchHomestayDetail,
  setHomestayDetail,
  //get all rooms
  fetchRooms,
  setRooms,
  //Add homestay
  addHomestay,
  setAddHomestay,
  //Add Room
  addRoom,
  setAddRoom,
};

export default allStore;
