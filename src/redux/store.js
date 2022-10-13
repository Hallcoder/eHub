import {legacy_createStore as createStore} from 'redux';
import Reducer from './reducer';
import {persistStore,persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler:autoMergeLevel2,
  }
  
const persistedReducer = persistReducer(persistConfig, Reducer);


export let store = createStore(persistedReducer);
export let persistor = persistStore(store);