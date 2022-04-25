function profileController() {
    return {
        index(req, res) {
            res.send('hello from Profile Page');
        },
    };
}

module.exports = profileController;
