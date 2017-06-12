/**
 * New node file
 */
var request = require('request')
    , express = require('express')
    ,assert = require("assert")
    ,http = require("http");

describe('http tests', function(){

    it('Login', function(done) {
        request.post(
            'http://localhost:3000/signin',
            { form: {emailId: "krishna@gmail.com", password: "krishna"}},
            function (error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            }
        );
    });
    it('Adding Course', function(done){
        request.post(
            'http://localhost:3000/courseAdd',
            {form: {CourseName: "Enterprise application development", FacultyName: "zang"}},
            function (error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            }
        );
    });

    it('Adding Student', function(done){
    	 request.post(
            'http://localhost:3000/courseAdd',
            {form: {LastName: "Pernapati", FirstName: "Vishnu Teja", CourseName: "Cloud", FacultyName: "paul",Grade: "A+"}},
            function (error, response, body) {
                assert.equal(200, response.statusCode);
                done();
            }
    	  );
    });

    it('Load Login Page', function(done){
        http.get('http://localhost:3000', function(res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});