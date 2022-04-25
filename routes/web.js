//controllers
const homeController = require('../app/http/controllers/homeController');
const profileController = require('../app/http/controllers/profileController');
const createController = require('../app/http/controllers/createController');

//middleware

function initRoutes(app) {
    app.get('/', homeController().index);
    app.get('/profile', profileController().index);
    app.get('/create', createController().index);
    app.post('/create', createController().store);
}

module.exports = initRoutes;
