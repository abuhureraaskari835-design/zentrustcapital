const path = require('path');
const rootdir = require('../utils/pathutils');
const getBrokerPage = require(path.join(rootdir, 'controllers', 'brokers'));
const express = require('express');

const brokerPageRouter = express.Router();
brokerPageRouter.get('/brokers', getBrokerPage.brokerPageController);

module.exports = brokerPageRouter;