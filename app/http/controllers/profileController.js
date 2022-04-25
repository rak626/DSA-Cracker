function profileController() {
    return {
        index(req, res) {
            res.render('./profile/profilePage');
        },
    };
}

module.exports = profileController;
