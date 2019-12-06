const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb://localhost:27017/Profile-db",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to DB")
  )
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

// Schema defintion
const ProfileSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: [true, "Surname is required!"]
  },
  givenname: {
    type: String,
    required: [true, "Given name is required!"]
  },
  dob: {
    type: String,
    required: [true, "Date of Birth is required!"]
  },
  gender: {
    type: String,
    required: [true, "Please Select your Gender"]
  },
  country: {
    type: String,
    required: [true, "Country Field is required!"]
  },
  phone: {
    type: Number,
    required: [true, "This Field is required!"]
  },
  residence: {
    type: String,
    required: [true, "This Field is required!"]
  },
  email: {
    type: String,
    required: [true, "This Field is required!"]
  },
  skills: {
    type: String,
    required: [true, "This Field is required!"]
  },
  projects: {
    type: String,
    required: [true, "This Field is required!"]
  }
});
const Profile = mongoose.model("Profile", ProfileSchema);

// view engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
  
});
app.post("/register", async (req, res) => {
  const myProfile = new Profile(req.body);
  // save data using scheme collection name 'Register' to database
  try {
        await myProfile.save();
        const items = await Profile.find();
        res.send('Thank you for registering with us /n ');
        // res.render("login", { users: items });
      } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
