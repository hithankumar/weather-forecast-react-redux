import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action){
    console.log(action);
    switch(action.type){
        case FETCH_WEATHER:
        //return state.concat([action.payload.data])
         return [action.payload.data, ...state]; //concat flattened state with the data values.
    }
   
   return state;
}