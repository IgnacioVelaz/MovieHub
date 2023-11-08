import dotenv from "dotenv"

if(process.env.NODE_ENV === 'production'){
    dotenv.config({path: '.env.producton'})
} else{
    dotenv.config({path: '.env.development'})
}

type ConfigType = {
    [key: string] : EnvironmentConfig
}
type EnvironmentConfig = {
    app : AppConfig,
    db: DbConfig
}
type AppConfig = {
    PORT: string | number
}
type DbConfig = {
    URI: string
}

const ENV = process.env.NODE_ENV ?? 'development'

const CONFIG: ConfigType  = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        },
        db: {
            URI: process.env.URI || "mongodb:/localhost:27017"
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 4002
        }, 
        db: {
            URI: process.env.URI || "mongodb:/localhost:27017"
        }
    }
}

export default CONFIG[ENV]