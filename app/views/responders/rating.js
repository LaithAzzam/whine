var _ = require('underscore');

var allowedProperties = [
    'rating',
];

exports.build = function(rating) {
    result = rating.toObject();
    return _.pick(result, function(value, key) {
        return _.contains(allowedProperties, key);
    });
};
