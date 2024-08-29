const Login = ({login}) => {
  return (
    <div className=' w-screen h-screen justify-center items-center bg-slate-900'>
 <form action={login} className="w-full h-full items-center justify-center flex flex-col gap-5">
    <h2>Login Form</h2>
  <input type="text" name="username" id=""  className='p-3 rounded text-black' placeholder="Username"/>
  <input type="password" name="password" id="" className="p-3 rounded text-black" placeholder="password"/>
  <button className="bg-slate-600 p-3 rounded-xl">Submit</button>
 </form>
</div>
  )
}

export default Login