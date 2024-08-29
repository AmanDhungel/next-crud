import Image from "next/image"

const Card = () => {
  return (
    <div className="p-3 rounded-xl w-96 bg-gray-100 my-2">
      <Image src='https://images.pexels.com/photos/3752194/pexels-photo-3752194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
      width={200} height={600} alt="card photo" className="h-80 w-96 rounded-xl object-cover"/>
      <div className="flex w-full justify-between mt-2">
      <h2 className="text-lg font-bold text-slate-950">Card Title</h2>
      <h2 className="text-lg font-bold text-slate-950" >$95.00</h2>
      </div>
      <p className="w-60 h-8 overflow-hidden text-ellipsis text-nowrap mb-5 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid, laboriosam dolorum voluptatum facilis ratione obcaecati eum dolor fuga molestiae, expedita consectetur tempore amet nostrum tenetur corporis. Placeat, iure ratione?</p>
      <button className="w-full bg-slate-400 rounded-xl p-3 capitalize text-black text-center">ADD TO CART</button>
    </div>
  )
}

export default Card