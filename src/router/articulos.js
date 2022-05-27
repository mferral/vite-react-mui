import AdminLayout from '@/layouts/admin'

import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Articulos from '@/pages/articulos'
import Articulo from '@/pages/articulos/add'

export default [
    {
        path:"/articulos",
        component:Articulos,
        auth:false,
        layout: AdminLayout
    },
    {
        path:"/articulo",
        component:Articulo,
        auth:false,
        layout: AdminLayout
    },
]