const express = require('express');
const multer = require('multer');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const productRouter = require('./routers/productRouter');
const sessionRouter = require('./routers/sessionRouter');

dotenv.config();
const mongoose = require('./config/dbConfig');
const app = express();
const PORT = process.env.PORT || 8080;


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    const newFileName = file.fieldname + '-' + uniqueSuffix + fileExtension;
    cb(null, newFileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'));
    }
  },
});

app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/products', productRouter);
app.use('/session', sessionRouter);

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`El servidor se esta escuchando en: http://localhost:${PORT}/`);
});
