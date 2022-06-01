import AdminLayout from '@/layouts/admin'
import Articulos from '@/pages/articulos'
import Articulo from '@/pages/articulos/add'

export default [
    {
        path:"/admin/articulos",
        component:Articulos,
        auth: true,
        layout: AdminLayout
    },
    {
        path:"/admin/articulo",
        component:Articulo,
        auth: true,
        layout: AdminLayout
    },
    {
        path:"/admin/articulo/:id",
        component:Articulo,
        auth: true,
        layout: AdminLayout
    },
]