import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers/index";

const persistConfig = {
  key: "taskReducer",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = () => {
  let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  let persistor = persistStore(store);
  return { store, persistor };
};

export default store;
