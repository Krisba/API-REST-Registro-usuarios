var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../app');


describe('GET /', function() {
    it('should return a 200 response', function(done) {
        request(app).get('/')
        .expect(200, done);
    });
});

describe('GET /readinessProbe', function() {
    it('should return a 200 response', function(done) {
        request(app).get('/readinessProbe')
        .expect(200, done);
    });
});

describe('GET /livenessProbe', function() {
    it('should return a 200 response', function(done) {
        request(app).get('/livenessProbe')
        .expect(200, done);
    });
});

