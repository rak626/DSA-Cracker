function homeController() {
    return {
        index(req, res) {
            res.send("hello from home page");
        },
    };
}

module.exports = homeController;
