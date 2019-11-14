const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path');
const mongoose = require('mongoose')
const Article = require('../../models/article');
const Resize = require('../../config/Resize');
const upload = multer({
    limits: {
        fileSize: 4 * 1024 * 1024,
    }
});

// const Article = mongoose.model('article');
router.post('/picture', upload.single('image'), async (req, res) => {
    const imagePath = path.join(__dirname, '/');
    // call class Resize
    // console.log(imagePath)
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(401).json({ error: 'Please provide an image' });
    }
    const filename = await fileUpload.save(req.file.buffer);
    const filepath = await fileUpload.filepath(filename);
    console.log(filename)
    // const article = new Article({
    //     namePicture: filepath,
    //     title: req.body.title,
    //     content:req.body.content,
    //     category:req.body.category
    // })
    // article.save();


    return res.status(200).json({ path: filepath });
})


// const imageUploader = multer({ dest: '/' }); // (**)
// router.post('/picture', imageUploader.single('image'), (req, res) => {
//     console.log(req.file)
//     const processedFile = req.file || {}; // MULTER xử lý và gắn đối tượng FILE vào req
//     let orgName = processedFile.originalname || ''; // Tên gốc trong máy tính của người upload
//     orgName = orgName.trim().replace(/ /g, "-")
//     const fullPathInServ = processedFile.path; // Đường dẫn đầy đủ của file vừa đc upload lên server
//     // Đổi tên của file vừa upload lên, vì multer đang đặt default ko có đuôi file
//     const newFullPath = `${fullPathInServ}-${orgName}`;
//     fs.renameSync(fullPathInServ, newFullPath);
//     res.send({
//         status: true,
//         message: 'file uploaded',
//         fileNameInServer: newFullPath
//     })
// })


module.exports = router