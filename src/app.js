import express from 'express';
import './utils/global.js'; 
import cors from 'cors';
import dotenv from 'dotenv/config.js';
import multer from 'multer';
import rotas from './rotas.js';
// import './repository/connection.js';

const app = express();
const port = process.env.PORT || 3000;
rotas(app);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    res.send(req.file);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});