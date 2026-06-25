const editAddBroker = require('../../models/Admin/broker.js');
exports.addEditBrokerController = (req, res,next) => {
    console.log('Rendering Add/Edit Broker page',req.body);
    let broker = [];
    res.render('admin/addEditBroker', {currentPage: 'addEditBroker', title: 'Add/Edit Broker' });
    broker = new editAddBroker(
        req.body.brokerDataTags,
        req.body.brokerName,
        req.body.brokerEditorsPick,
        req.body.brokerLogo,
        req.body.brokerDescription,
        req.body.brokerRating,
        req.body.brokerTags,
        req.body.brokerLeverage,
        req.body.brokerMinDeposit,
        req.body.brokerMinSpread
    );
    broker.save();

    
};