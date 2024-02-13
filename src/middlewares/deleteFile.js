const cloudinary = require('cloudinary').v2;

const deleteFile = (imgURL) => {

    const imgSplited = imgURL.split('/');
    const nameSplited = imgSplited[imgSplited.length - 1].split('.')[0];
    const folderSplitted = imgSplited[imgSplited.length - 2].split('.')[0];
    const public_id = `${folderSplitted}/${nameSplited}`
    
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image deleted 🫠');
  });
};

module.exports = { deleteFile };
