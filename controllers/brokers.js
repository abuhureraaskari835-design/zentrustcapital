const editAddBroker = require('../models/Admin/broker.js');

exports.brokerPageController = (req, res, next) => {
    editAddBroker.fetchAll((brokers) => {
        console.log('Fetched brokers:', brokers);
        res.render('brokers', {
            editAddBroker : brokers,
            currentPage: 'brokers',
            title: 'Top Brokers'
        });

    });
};