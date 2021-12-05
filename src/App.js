import "./App.css";
import {connect} from 'react-redux'
import {setName} from './actions/userAction'


function App(props) {
  console.log(props);

  function btnClicked(){
    props.setName('Fayzullo')
  }

  return (
  <div className="app">
    <h1>{props.userName}</h1>
    <button onClick={btnClicked}>changeName</button>
  </div>
  )}

  function mapStateToProps(state){
    return {
      userName: state.userReducer.name
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      setName: (name)=>{
        dispatch(setName(name))
      }
    }
  }

  const a = connect(mapStateToProps, mapDispatchToProps)

export default a(App);
