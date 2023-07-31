const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://imshu:<Shudh@99553>@cluster0.8g5s4ea.mongodb.net/?retryWrites=true&w=majority"; 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected');
}
//mongodb://127.0.0.1/my_signin