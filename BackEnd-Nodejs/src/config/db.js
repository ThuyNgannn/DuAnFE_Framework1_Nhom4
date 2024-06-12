// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             // Nếu bạn cần thêm tùy chọn cấu hình khác, bạn có thể thêm ở đây
//         });
//         console.log('MongoDB connected @@...');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error.message);
//         process.exit(1);
//     }
// };
// // Đường dẫn đến hình ảnh
// const imagePath = 'path/to/image.jpg';

// // Đọc hình ảnh từ ổ đĩa
// const image = imageProcessing.readImage(imagePath);

// // Chuyển đổi hình ảnh thành dữ liệu nhị phân
// const binaryData = imageProcessing.imageToBinaryData(image);

// // Lưu trữ hình ảnh vào MongoDB
// imageProcessing.saveImageToMongoDB(binaryData);

// module.exports = connectDB;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(process.env.MONGODB_URI);
        console.log('MongoDB connected @@...');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
