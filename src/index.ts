import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import router from './routers'
import debug from 'debug'

const serve = require('koa-static')
const render = require('koa-art-template')
const path = require('path')

const open = require('open')
const getPort = require('get-port')
const debuger = debug('koa:app')

const app = new Koa()

render(app, {
    root: path.join(__dirname, '../views'),
    extname: '.art'
})

app.use(logger())
    .use(json())
    .use(bodyParser())
    .use(serve('.'))

app.use(router.routes())

const start = (async (options: any = {}) => {
    const port = await getPort({port: +process.env.PORT || options.port})
    app.listen(port, () => {
        console.log('app starting at ', port)
        debuger('app:entry')
        try {
            open(`http:127.0.0.1:${port}`)
        }catch(err){
            console.error(err)
        }
    })
})

export default start
