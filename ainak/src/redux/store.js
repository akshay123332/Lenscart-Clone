import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as menspagereducer  } from "./menspage/reducer";

export const store=legacy_createStore(menspagereducer,applyMiddleware(thunk)) 