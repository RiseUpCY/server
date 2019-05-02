const get = async (ctx: any) => {
    console.log(ctx.env)
    ctx.body = 'api route test '
}
export {
    get
}
// 以下导出会在默认属性default下
// export default test