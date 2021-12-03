import { postLogin, setLogin } from "./Login/Set-Login.js";
import setLoading from "./setLoading.js";
import setError from "./setError.js";
import setUser from "./containerUser/Set-User.js";
import { postEditUser, setEditUser } from "./containerUser/Edit-User.js";
import { fetchHomestay, setHomestay } from "./Homestay/listHome.js";

const allStore = {
  postLogin,
  setLogin,
  setLoading,
  setError,
  setUser,
  postEditUser,
  setEditUser,
  fetchHomestay,
  setHomestay,
};

export default allStore;
