//controllers
const homeController = require('../app/http/controllers/homeController');
const profileController = require('../app/http/controllers/profileController');

//middleware

function initRoutes(app) {
    app.get('/', homeController().index);
    app.get('/profile', profileController().index);
}

module.exports = initRoutes;
