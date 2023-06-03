require('dotenv').config()

const serverPort=process.env.SERVER_PORT || 5002 //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
const mongoUrl= "mongodb://127.0.0.1:27017/user_form"

//const defaultImagePath=process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/default.jpg'

module.exports = {serverPort,mongoUrl}