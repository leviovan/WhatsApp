
import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/form/Form'
import Messager from './components/messager/messager.jsx';
function App() {

  const auth =useSelector(state=> state.auth.auth)
  console.log(auth);
  return (
  
      <div  className='main'>
        {!auth ? <Form/>:<Messager/>}
      </div>
  )
}

export default App
