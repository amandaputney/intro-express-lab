const nativeplants = [
    { nativeplant: 'Hummingbird sage', tree: false, perennial: true },
    { nativeplant: 'Western Red Bud', tree: true, perennial: false, },
    { nativeplant: 'Coast Live Oak', tree: true, perennial: false, },
    { nativeplant: 'Canyon Dudleya', tree: false, perennial: true },
    { nativeplant: 'California Buckwheat', tree: false, perennial: true }
];

module.exports = {
    getAll: function () {
        return nativeplants;
    }
};