const UserController = require("../controllers/user.controller")
const {register, login, getAll} = require('../controllers/user.controller')

module.exports = app => {
    // app.post("/api/users/register", UserController.register);
    app.post('/api/users/register', UserController.register)
    // app.post("/api/users/login", UserController.login);
    app.post('/api/users/login', UserController.login)

    app.get("/api/users/getall", UserController.getall);
    // app.post('/api/users/getall', function(req,res){
    //     UserController.getAll
    // })


}