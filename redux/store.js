import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import root from "./reducers/root";
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const store = initialState => {
    return createStore(
        root,
        initialState,
        composeWithDevTools(applyMiddleware(thunk,logger))
    )
}
export default store