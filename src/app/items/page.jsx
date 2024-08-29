import Card from "../_components/card/index.jsx"
import {checkAuth} from '../utils/cookies.js'
const page = async() => {

  return (
    <div>
      <h1 className="p-3 w-full bg-slate-900 mt-2 pl-3 rounded-lg">Shop Now</h1>
      <Card/>
    </div>
  )
}

export default page