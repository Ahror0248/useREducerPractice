import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";


function reducer(action, state){

  switch(action.type){
    case 'SET-COUNT':
      state = {...state, count: action.payload}
      break
      case 'SET-NAME': 
      state = {...state, name: action.payload}
      default: return state
  }
  
  
  return state
}


const store = createStore(reducer, {
  count: 0,
  name: 'Ahrorbek'
}, applyMiddleware(logger))


store.subscribe(()=>{
 console.log(store.getState())
})

store.dispatch({type:'SET-COUNT', payload: 1000})
// store.dispatch({type:'SET-COUNT', payload: 300})
// store.dispatch({type:'SET-COUNT', payload: 1200})
store.dispatch({type:'SET-NAME', payload: 'Abdulloh'})
store.dispatch({type:'SET-NAME', payload: 'Asadbek'})

// console.log(store.getState());