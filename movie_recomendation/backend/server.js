const express = require("express")
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// app.get("/api/test", (req,res) =>{
//     console.log({message:"hey it's me!"})
// })

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/user.routes")(app);

app.listen(port, ()=>console.log(`Running on port ${port} is a new I like to be!`));