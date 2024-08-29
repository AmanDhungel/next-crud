import '../globals.css'
import Login from '../_components/login/Login.jsx'
import {login} from '../utils/serverActions'

const page = () => {
  return (
  <Login login={login}/>
  )
}

export default page