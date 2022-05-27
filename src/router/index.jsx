import Routing from '@/core/routing'
import general from '@/router/general'
import articulos from '@/router/articulos'

const combineRoutes = [    
    ...general,
    ...articulos,
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes
