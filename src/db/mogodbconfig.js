import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
}).then(
    (res) => {
        console.log("DB Connected")
    }
).catch((err) => {
    console.log(err)
})

export default mongoose;