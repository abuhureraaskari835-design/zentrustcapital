exports.compareBrokersPageController = (req, res,next) => {
    res.render('compare-brokers', {currentPage: 'compare-brokers', title: 'Compare Brokers' });
};