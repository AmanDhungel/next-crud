'use client'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useReducer, useState } from 'react'
import { createColumnHelper } from "@tanstack/react-table"
import Link from 'next/link'
import { deleteProduct } from '../../utils/serverActions.js'


const defaultData = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]




 const  DemoTable = ({productData}) => {
  const [data, _setData] = useState(() => [...productData])
  console.log(data);
  const columnHelper = createColumnHelper()
 const columns = [
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
    }),

    columnHelper.accessor('type', {
      header: () => 'type',
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('price', {
      header: () => <span>Price</span>,
      cell: info => info.renderValue(),
    }),
    columnHelper.accessor('status', {
      header: () => <span>Actions</span>,
      cell : (a) => (
      <div className='flex gap-3'>
      <Link href={`product/${productData.id}`} className="bg-green-500 p-3 rounded-xl">View</Link>
            <form action={deleteProduct}>
              <input type="hidden" value={a.row.original._id} name="id" />
              <button className="bg-red-500 p-3 rounded-xl">Delete</button>
            </form>
      </div>
      )  })
  ]
  const rerender = useReducer(() => ({}), {})[1]
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="p-2">
      <table className='w-full text-start'>
        <thead className=''>
          {table.getHeaderGroups().map(headerGroup => (
            <tr className='bg-gray-600 h-10 text-left' key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='w-full text-left'>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className=''>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  )
}


export default DemoTable;