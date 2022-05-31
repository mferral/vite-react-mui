import AdminLayout from '@/layouts/admin'
import Dashboard from '@/pages/dashboard'
import Users from '@/pages/users'
import articulos from './articulos'
export default [
    ...articulos,
    {   
        path:"admin/dashboard",
        component:Dashboard,
        auth:true,
        layout: AdminLayout
    },
    {
        path:"admin/usuarios",
        component:Users,
        auth:false,
        layout: AdminLayout
    },
    
]