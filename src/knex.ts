const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'xqyy'
    },
    pool: {
        min: 2,
        max: 10
    },
    // acquireConnectionTimeout: 10000,
    log: {
        error(message: any) {
            console.log('knex error')
            console.log(message)
        }
    }
})

export default knex
