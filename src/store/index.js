import rootReducer from '../reducers/index'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root',
  storage: storage
};

// const {
//   middleware: offlineMiddleware,
//   enhanceReducer: offlineEnhanceReducer,
//   enhanceStore: offlineEnhanceStore
// } =  createOffline({
//   ...offlineConfig,
//   persist: false
// });

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  // const rootReducer = combineReducers(reducers);
  const middlewareList = [
    /* other middleware here */
    sagaMiddleware,
    logger
  ];


  const middleware = applyMiddleware(...middlewareList);

  const store = createStore(persistedReducer, middleware);
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { persistor, store };
}
