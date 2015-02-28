/**
 * Created by Isaac on 2/27/2015.
 */
(function () {
    'use strict';

    var Lead = require('../models/lead'),
        should = require('should');

    describe('Lead: ', function () {
        describe('Default values', function () {
            var lead = {};
            before(function () {
                lead = new Lead({email: 'me@cool.com', company: "My Company", lastName: "Last"});
            });

            it('lead source is "Business Site Inquiry"', function () {
                lead.leadSource.should.equal('Business Site Inquiry');
            });
        });
    });
})();