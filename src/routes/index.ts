import adminRouter from './admin'
import apiRouter from './api'

function mapRoutes(app: any) {
    app.use(adminRouter.routes())
    app.use(apiRouter.routes())
}

export default mapRoutes