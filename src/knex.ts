const MYSQL_HOST = process.env.MYSQL_HOST ? process.env.MYSQL_HOST : 'localhost'
const MYSQL_USERNAME = process.env.MYSQL_USERNAME ? process.env.MYSQL_USERNAME : 'root'
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : 'root'
const MYSQL_DATABASE = process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'zhihu'

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: MYSQL_HOST,
        user: MYSQL_USERNAME,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE
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
