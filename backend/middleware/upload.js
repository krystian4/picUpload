import { promisify } from "util";
import multer, { diskStorage } from "multer";

const maxSize = 2 * 1024 * 1024;

let storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("image");

let uploadFileMiddleWare = promisify(uploadFile);
export default uploadFileMiddleWare;