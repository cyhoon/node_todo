var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':'
        + configValues.pwd +'@ds129090.mlab.com:29090/young_h';
    }

}