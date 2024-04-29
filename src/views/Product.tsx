import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom"
import { getProducts, updateProductAvailability } from "../services/ProductService"
import ProductDetail from "../Components/ProductDetail"
import type { Product } from "../types"
export async function loader() {
  try {
    return await getProducts()
  } catch (error) {
    return []
  }
}
export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return {}
}

export default function Product() {
  const products = useLoaderData() as Product[]
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to="products/new"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bld text-white shadow-sm hover:bg-indigo-500"
        >
          Agregar Producto
        </Link>
      </div>
      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetail
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
