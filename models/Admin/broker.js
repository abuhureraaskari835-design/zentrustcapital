const path = require('path');
const rootdir = require('../../utils/pathutils');
const fs = require('fs');
const dataFilePath = path.join(rootdir, 'data', 'brokers.json');


module.exports = class editAddBroker {
    constructor(brokerDataTags, brokerName, brokerEditorsPick, brokerLogo, brokerDescription, brokerRating, brokerTags, brokerLeverage, brokerMinDeposit, brokerMinSpread) {
        this.brokerDataTags = brokerDataTags;
        this.brokerName = brokerName;
        this.brokerEditorsPick = brokerEditorsPick;
        this.brokerLogo = brokerLogo;
        this.brokerDescription = brokerDescription;
        this.brokerRating = brokerRating;
        this.brokerTags = brokerTags;
        this.brokerLeverage = brokerLeverage;
        this.brokerMinDeposit = brokerMinDeposit;
        this.brokerMinSpread = brokerMinSpread;
    }

    save() {
        fs.writeFile(dataFilePath, JSON.stringify(this), (err) => {
            if (err) {
                console.error('Error saving broker data:', err);
            } else {
                console.log('Broker data saved successfully.');
            }
        });
    }

    static fetchAll(callback) {
        fs.readFile(dataFilePath, (err, fileContent) => {
            if (err) {
                console.error('Error reading broker data:', err);
                callback([]);
            } else {
                const brokers = JSON.parse(fileContent);
                callback(brokers);
            }
        });
    }
}