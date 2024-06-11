const fs = require('fs');
const mongoose = require('mongoose');

// Đọc hình ảnh từ ổ đĩa
const readImage = (path) => {
    return fs.readFileSync(path);
};

// Chuyển đổi hình ảnh thành dữ liệu nhị phân
const imageToBinaryData = (image) => {
    return new Buffer(image).toString('base64');
};

// Lưu trữ hình ảnh vào MongoDB
const saveImageToMongoDB = (binaryData) => {
    // Định nghĩa schema cho tài liệu MongoDB
    const imageSchema = new mongoose.Schema({
        imageData: { type: Buffer }
    });

    // Tạo một model từ schema
    const Image = mongoose.model('Image', imageSchema);

    // Tạo một đối tượng image và lưu vào MongoDB
    const image = new Image({ imageData: binaryData });
    image.save((err) => {
        if (err) {
            console.error('Lỗi khi lưu trữ hình ảnh:', err);
        } else {
            console.log('Hình ảnh đã được lưu trữ thành công.');
        }
    });
};

module.exports = {
    readImage,
    imageToBinaryData,
    saveImageToMongoDB
};
