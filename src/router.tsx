import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Product from "./views/Product";
import NewProduct, {action as newProductAction} from "./views/NewProduct";
import { loader as productsLoader, action as updateAvailabilityAction } from "./views/Product";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct"
import { action as deleteProductAcion} from "./Components/ProductDetail";
export const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        children: [
            {
                index: true,
                element: <Product/>,
                loader: productsLoader,
                action:updateAvailabilityAction
            },
            {
                path: 'products/new',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'products/:id/edit',
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'products/:id/eliminar',
                action: deleteProductAcion
            }
        ]
    }
])