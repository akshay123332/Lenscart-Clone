import { applyMiddleware, legacy_createStore,combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./authReducer/reducer"
import { reducer as menspagereducer  } from "./menspage/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({auth:authReducer,menspagereducer})

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))) 