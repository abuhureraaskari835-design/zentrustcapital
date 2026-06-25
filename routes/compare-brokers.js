const path = require('path');
const rootdir = require('../utils/pathutils');
const getcompareBrokersPage = require(path.join(rootdir, 'controllers', 'compare-brokers'));
const express = require('express');

const compareBrokersPageRouter = express.Router();
compareBrokersPageRouter.get('/compare-brokers', getcompareBrokersPage.compareBrokersPageController);

module.exports = compareBrokersPageRouter;