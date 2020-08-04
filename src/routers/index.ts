import * as Router from '@koa/router'
import { getList } from '../controller'
const extname = require('get-ext');

const router = Router()

router.get('/', getList)

router.get('/**', async (ctx) => {
    const ext = extname(ctx.path)
    console.log(ext, 'extension')
    if(!ext) {
        await getList(ctx)
    }
})

export default router