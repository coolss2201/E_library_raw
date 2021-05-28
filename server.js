const express = require("express");
const app = express();
const path = require("path");
const port =process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/static")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

dburl =
  "mongodb+srv://user:user@cluster0.dhnws.mongodb.net/Elibrary?retryWrites=true&w=majority";

var Book = mongoose.model("Book", {
  img: String,
  name: String,
  link: String,
  deptyear: String,
});
var Notice = mongoose.model("Notice", {
  name: String,
  link: String,
});

var Alumni = mongoose.model("Alumni", {
  name: String,
  id: String,
  password: String,
  contact: Number,
  mail: String,
});

app.get("/", (req, res) => {
  res.render("index", { data: false });
});

app.get("/student/getnotice", (req, res) => {
  Notice.find({}, (err, data) => {
    res.send(data);
  });
});



app.post("/alumni", (req, res) => {
  var id = req.body.id;
  var pass = req.body.pass;
  Alumni.findOne({ id: id }, (err, data) => {
    if (data==null) {
      res.render("index", { data: true });
    } else {
      if (data.password == pass) res.render("alumni",{name:data.name,flag:false});
      else res.render("index", { data: true });
    }
  });
});

app.post("/alumni/addnotice",(req,res)=>{
  var name=req.body.name;
  var link=req.body.link;
  var newnotice={name:name,link:link}
  var alumni=req.body.alumni;
  var notice=new Notice(newnotice);
  notice.save()
  res.render("alumni",{name:alumni,flag:true})
})

app.post("/admin",(req,res)=>{
  var id=req.body.id;
  var pass=req.body.pass;
  if(id=="admin" && pass=="admin")
  {
    res.render("admin");
  }
  else
  {
    res.render("index",{data:true});
  }
})

app.post("/student/get", (req, res) => {
  var deptyear = req.body.deptyear;
  Book.find({ deptyear: deptyear }, (err, books) => {
    res.send(books);
  });
});



app.get("/admin/getalumni", (req, res) => {
  Alumni.find({}, (err, data) => {
    res.send(data);
  });
});

app.post("/admin/addbook", (req, res) => {
  var book = new Book(req.body.data);
  book.save((err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});

app.get("/admin/getwhole", (req, res) => {
  Book.find({}, (err, books) => {
    res.send(books);
  });
});

app.post("/admin/delete", (req, res) => {
  var name = req.body.name;
  var deptyear = req.body.deptyear;
  Book.findOneAndDelete({ name: name, deptyear: deptyear }, (err) => {
    if (err) console.log(err);
  });
});

app.post("/admin/addnotice", (req, res) => {
  var notice = new Notice(req.body.notice);
  notice.save((err, result) => {
    if (err) console.log(err);
  });
});
app.get("/admin/getnotice", (req, res) => {
  Notice.find({}, (err, data) => {
    res.send(data);
  });
});

app.post("/admin/deletenotice", (req, res) => {
  var name = req.body.name;
  Notice.findOneAndDelete({ name: name }, (err) => {
    if (err) console.log(err);
  });
});

app.post("/admin/addalumni", (req, res) => {
  var alumni = new Alumni(req.body.alumni);
  alumni.save((err, result) => {
    if (err) console.log(err);
  });
});

app.post("/admin/deletealumni", (req, res) => {
  var id = req.body.id;
  Alumni.findOneAndDelete({ id: id }, (err) => {
    if (err) console.log(err);
  });
});

app.get(/student/, (req, res) => {
  res.render("student");
});

app.get(/admin/,(req,res)=>{
res.render("admin")
})

mongoose.connect(dburl, { useNewUrlParser: true }, (err) => {
  console.log("mongodb connected", err);
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
