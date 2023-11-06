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
    app : AppConfig
}
type AppConfig = {
    PORT: string | number
}

const ENV = process.env.NODE_ENV ?? 'development'

const CONFIG: ConfigType  = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        },
    },
    production: {
        app: {
            PORT: process.env.PORT || 4002
        }
    }
}

export default CONFIG[ENV]