const fs = require('fs-extra')
const path = require('path')

async function getList(ctx) {
    const cwd = process.cwd()
    const data = await fs.readdir(path.join(cwd, ctx.path))
    await ctx.render('index', {
        cwd: path.join(cwd, ctx.path),
        path: path.join(ctx.path, '/'),
        list: data
    });
}

export { getList }