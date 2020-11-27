var cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: process.env.DB_CLOUDNAME,
	api_key: process.env.CAPIKEY,
	api_secret: process.env.CAPISECRET,
});

export default cloudinary;
