import Search from '../../../_components/Search/Search';
import { deleteProduct, getProduct } from '../../../utils/action'
import Link from 'next/link';


const page = async({searchParams}) => {
    console.log('searchParams' ,searchParams)
    const q = searchParams?.q || ''
  
    const pantProduct = await getProduct(q);
  
    const product = pantProduct.filter(item => item.type == 'shoe')
  
    return (
      <div>
        <div className="bg-slate-900 flex justify-between p-4 rounded-xl mb-3 mt-3 mr-10">
        <h1 className="my-2">Pant</h1>
        <Search type="text" placeholder='holder' className='bg-gray-400 p-3  rounded text-black' />
        <Link className="bg-green-500 p-3 rounded-xl" href='product/add'>Add Product</Link>
        </div>
      <div className="mr-10">
        <table className="w-full bg-slate-900 p-5 rounded-xl">
          <thead className="h-12">
            <tr>
              <td></td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Type</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody >
            {product.map((item) => (
            <tr key={item.id} className="h-14">
              <td></td>
              <td className="p-2">{item.name}</td>
              <td>{item.price}</td>
              <td>{item.type}</td>
              <td className="flex gap-3">
              <Link href={`product/${item.id}`} className="bg-green-500 p-3 rounded-xl">View</Link>
              <form action={deleteProduct}>
                <input type="hidden" value={item.id} name="id" />
              <button className="bg-red-500 p-3 rounded-xl">Delete</button>
              </form>
              </td>
            </tr>
            ))}
  
          </tbody>
        </table>
      </div>
      </div>
    )
}

export default page