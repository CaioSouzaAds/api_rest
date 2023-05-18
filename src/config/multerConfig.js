import { extname, resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import multer from 'multer';

function aleatorio() {
  return Math.floor(Math.random() * 10000 + 10000);
}

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}_${extname(file.originalname)}`);
    },
  }),
};
