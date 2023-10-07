import http from 'http';
import mongoose from 'mongoose';

mongoose.connect('mongodb://0.0.0.0:27017/backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connected');
    var studentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        rollno: {
            type: String,
            required: true,
        }
    })
    var Student = mongoose.model("Student", studentSchema);


    http.createServer((req, res) => {
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h1>Welcome to home<h1>")
            res.write("<a href='/show'>Show</a>")
            res.write("<a href='/edit'>edit</a>")
            res.write("<a href='/add'>add</a>")
            res.write("<a href='/delete'>delete</a>")
            res.end();
        }
        else if (req.url === '/show' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            Student.find().exec().then((student) => {
                res.end(JSON.stringify(student));
            }).catch((err) => console.log(err));
        }
        else if (req.url === '/add' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            Student.create({ name: "ALi", rollno: "Sp21-bcs-077" }).then((student) => {
                res.write("<h1>User create<h1>")
                res.end(JSON.stringify(student));
            }).catch((err) => console.log(err));
        }
        else if (req.url === '/edit' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            Student.findOneAndUpdate({ name: "ALi" }, { rollno: "fasdef" }, { new: true }).then((student) => {
                res.write("<h1>User Updated<h1>")
                res.end(JSON.stringify(student));
            }).catch((err) => console.log(err));
        }
        else if (req.url === '/delete' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            Student.deleteOne({ name: "ALi" }).then(() => {
                res.write("<h1>User deleted<h1>")
                res.end();
            }).catch((err) => console.log(err));
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
        }

    }).listen(3000, () => console.log('Server running on port 3000'))
}).catch((err) => console.log(err));
