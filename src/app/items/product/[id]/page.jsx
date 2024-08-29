import {  getProductbyId, updateProduct } from "../../../utils/action"

const page = async({params}) => {
    const { id } = params;
    console.log(id);

    const data = await getProductbyId(id);
   
    console.log(data);

  return (
    <>
        <h1 className="p-3 w-full bg-slate-900 mt-2 pl-3 rounded-lg">Update product id. {id}</h1>
    <form action={updateProduct}  className="flex m-auto gap-3 w-2/4 p-20 bg-slate-900 mt-3 rounded-xl ">
    <input type="hidden" name="id" value={id}/>
        <div className="w-[30rem] flex flex-col gap-5 m-auto">
     <input type="text" name="name" className="bg-slate-950 p-3 rounded" placeholder={data.name} />
     <select name="type" id="" className="bg-slate-950 p-3 rounded" placeholder="Product Name" >
        <option value="pant" selected={data.type == 'pant'} className="">Pant</option>
        <option value="shoe"  selected={data.type == 'shoe'}>Shoe</option>
        <option value="trouser-tshirt" selected={data.type == 'trouser-tshirt'}>Trouser - Tshirt</option>
        <option value="jackets" selected={data.type == 'jackets'}>Jackets</option>
     </select>
     <input type="number" name="price" className="bg-slate-950 p-3 rounded" placeholder={data.price} />
     <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-3 rounded" type="submit">Update</button>
        </div>
    </form>
    </>

  )
}

export default page