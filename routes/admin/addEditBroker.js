const path = require('path');
const rootdir = require('../../utils/pathutils');
const addEditbroker = require(path.join(rootdir, 'controllers', '/admin', 'addEditbroker.js'));
const express = require('express');

const addEditbrokerRouter = express.Router();
addEditbrokerRouter.get('/admin/addEditbroker', addEditbroker.addEditBrokerController);
addEditbrokerRouter.post('/admin/addEditbroker', addEditbroker.addEditBrokerController);

module.exports = addEditbrokerRouter;