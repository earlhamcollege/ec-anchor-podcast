module.exports = {
    extend: 'apostrophe-widgets',
    label: 'EC Anchor Podcast',
    perPage: 50,
    name: 'ec-anchor-podcast',
    beforeConstruct: function(self, options) {
        options.addFields = [
            {
                name: 'station_id',
                type: 'string',
                label: 'Station ID',
                required: true
            }
        ].concat(options.addFields || [])

        options.arrangeFields = [
            {
                name: 'general',
                label: 'General Settings',
                fields: ['station_id']
            }
        ].concat(options.arrangeFields || [])
    },
    construct: function (self, options) {
        var superPushAssets = self.pushAssets;

        self.pushAssets = function() {
            superPushAssets();
            self.pushAsset('stylesheet','always'); // public/css/always.less
            self.pushAsset('script','always'); // public/js/always.js
        }
    }
}