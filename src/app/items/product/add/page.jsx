import { addProduct, getProduct } from "../../../utils/action"

const page = async() => {

    const data = await getProduct();

  return (
    <>
        <h1 className="p-3 w-full bg-slate-900 mt-2 pl-3 rounded-lg">Add Product</h1>
    <form action={addProduct}  className="flex m-auto gap-3 w-2/4 p-20 bg-slate-900 mt-3 rounded-xl ">
        <div className="w-[30rem] flex flex-col gap-5 m-auto">
     <input type="text" name="name" className="bg-slate-950 p-3 rounded" placeholder="Product Name" required/>
     <select name="type" id="" className="bg-slate-950 p-3 rounded" placeholder="Product Name" required>
        <option value="pant" className="">Pant</option>
        <option value="shoe">Shoe</option>
        <option value="trouser-tshirt">Trouser - Tshirt</option>
        <option value="jackets">Jackets</option>
     </select>
     <input type="number" name="price" className="bg-slate-950 p-3 rounded" placeholder="Price" required/>

     <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-3 rounded" type="submit">Submit</button>
        </div>
        {/* <div className="w-[30rem] flex flex-col gap-3 ">
     <input type="text" name="name" className="bg-slate-950 p-3 rounded" placeholder="Product Name"/>
     <select name="type" id="" className="bg-slate-950 p-3 rounded" placeholder="Product Name">
        <option value="pant" className="">Pant</option>
        <option value="shoe">Shoe</option>
        <option value="trouser-tshirt">Trouser - Tshirt</option>
        <option value="jackets">Jackets</option>
     </select>
     <input type="text" name="name" className="bg-slate-950 p-3 rounded" placeholder="Product Name"/>
     <input type="text" name="name" className="bg-slate-950 p-3 rounded" placeholder="Product Name"/>
        </div> */}
    </form>
    </>

  )
}

export default page