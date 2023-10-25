import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
    
}).then(() => console.log("DB connected"))
var studentSchema = new mongoose.Schema({
    name: {
    type:String,
    required: true,
    },
    rollno: { 
        type:String,
        required: true,  
    }
})
var Student = mongoose.model("Student", studentSchema);
try {
    Student.create({
        name: "Rahul",
        rollno: "1234"
    }).then((student) => console.log(student)).catch((err) => console.log(err));
} catch (err) {
    console.log(err);
}
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const users = [];

app.get('/', (req, res) => {
    res.render("index", { name: "John" });
});
app.get('/add', (req, res) => {

    res.send("nice");
});
app.get('/success', (req, res) => {
    res.render("success");
});
app.post('/success', (req, res) => {
    console.log(req.body);
    users.push({ username: req.body.username, email: req.body.email });
    res.redirect("/success");
});
app.get('/users', (req, res) => {
    res.json({ users, });
});
app.listen(3000, () => console.log('Server running on port 3000'));
