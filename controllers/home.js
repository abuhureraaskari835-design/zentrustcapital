exports.homePageController = (req, res,next) => {
    res.render('index', {currentPage: 'home', title: 'ZEN TRUST CAPITAL' });
};