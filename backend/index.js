const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongeDB connection
mongoose
  .connect("mongodb://localhost:27017/FoodDeliverySystem")
  .then(() => console.log("Connnected to Database !"))
  .catch((err) => console.log(err));


// User section

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  Password: String,
  confirmPassword: String,
  image: String,
});

//
const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Server is running");
});

//api sign up
app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    const result = await userModel.findOne({ email: email });
    if (result) {
      res.send({ message: "Email id is already registerd !" });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign Up !" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//api log in
app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const result = await userModel.findOne({ email: email });
    if (result) {
      //hide password
      const sendData = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(sendData);
      res.send({ message: "Successfully loged in !",data:sendData });
    }else{
        res.send({ message: "This user is not registerd !"});
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error"});
  }
});



// Product section

const productSchema = mongoose.Schema({
   name : String,
   category : String,
   image : String,
   price : String,
   description : String,
})

const productModel = mongoose.model("product",productSchema)

//save new prodcut
app.post("/uploadProduct",async(req,res)=>{
    console.log(req.body)
    const data = productModel(req.body)
    const saveData = data.save()
    res.send({message:"Successffully uploaded !"})
});




app.listen(PORT, () => console.log("Server is running at port : " + PORT));
