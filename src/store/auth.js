import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
//
import { auth, db } from "../firebase/index";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { LOGIN_MODAL, REGISTER_MODAL } from "./navbarSlice";
import { toast } from "react-toastify";
//
export const signUp = createAsyncThunk(
  "auth/signup",
  async (USER, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const { name, email, password } = USER;
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            password: password,
            id: user.uid,
          }).then(() => {
            dispatch(REGISTER_MODAL());
            window.location.reload();
            localStorage.setItem(
              "user-info",
              JSON.stringify({
                name: name,
                id: user.uid,
              })
            );
          });
        }
      );
    } catch (e) {
      console.log(e);

      if (e.code == "auth/email-already-in-use") {
        return rejectWithValue("email-already-in-use");
      }
      return rejectWithValue(e.Message);
    }
  }
);
export const logOut = createAsyncThunk("auth/logOut", async (_, thunkApi) => {
  const { rejectWithValue, getState } = thunkApi;
  try {
    localStorage.removeItem("user-info");
    await signOut(auth);
  } catch (e) {
    return rejectWithValue(e.Message);
  }
});
export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (id, thunkApi) => {
    console.log(id);
    const { rejectWithValue, getState } = thunkApi;
    try {
      const q = query(collection(db, "users"), where("id", "==", id));
      const querySnapshot = await getDocs(q);
      return { querySnapshot };
    } catch (e) {
      return rejectWithValue(e.Message);
    }
  }
);
export const login = createAsyncThunk("auth/logIn", async (USER, thunkApi) => {
  console.log(USER);
  const { email, password } = USER;
  const { rejectWithValue, dispatch } = thunkApi;
  try {
    const info = [];
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        const id = user.uid;
        info.push({ email: user.email, id: user.uid });
        dispatch(LOGIN_MODAL());
        dispatch(getUserData(id));
        localStorage.setItem("user-info", JSON.stringify({ id: id, email }));
      }
    );
    return info;
  } catch (e) {
    if (e.code == "auth/wrong-password") {
      return rejectWithValue("Wrong Password");
    }
    if (e.code == "auth/user-not-found") {
      return rejectWithValue("user-not-found");
    }
    return rejectWithValue(e.Message);
  }
});
const initialState = {
  user: null,
  loader: false,
  errorServer: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // sign-Up
    [signUp.pending]: (state, actions) => {
      state.loader = true;
    },
    [signUp.fulfilled]: (state, actions) => {
      state.loader = false;
    },
    [signUp.rejected]: (state, actions) => {
      state.loader = false;
      console.log(actions);
      state.errorServer = actions.payload;
      toast.error(`${actions.payload} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    // login
    [login.pending]: (state, actions) => {
      state.loader = true;
    },
    [login.fulfilled]: (state, actions) => {
      state.loader = false;
    },
    [login.rejected]: (state, actions) => {
      state.loader = false;
      state.errorServer = actions.payload;
      toast.error(`${actions.payload} !`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    // logOut
    [logOut.pending]: (state, actions) => {
      state.loader = true;
    },
    [logOut.fulfilled]: (state, actions) => {
      state.loader = false;
      state.user = null;
    },
    [logOut.rejected]: (state, actions) => {
      state.loader = false;
      state.errorServer = actions;
    },
    // getUserData
    [getUserData.pending]: (state, actions) => {
      state.loader = true;
    },
    [getUserData.fulfilled]: (state, actions) => {
      const { querySnapshot } = actions.payload;
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          state.user = doc.data();
        });
      }
    },
    [getUserData.rejected]: (state, actions) => {
      console.log(actions);
      state.errorServer = actions;
    },
  },
});
// export const { SAVE_USER_DATA } = authSlice.actions;
export default authSlice.reducer;
