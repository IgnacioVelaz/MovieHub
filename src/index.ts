import config from "./config/config"
import app from "./server"
import connect from './db/connect'

const PORT = config.app.PORT;

(async () => {
    await connect()
    console.log('Connected to database!')

    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
})()
