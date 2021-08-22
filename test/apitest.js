'use strict';
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('signin', () => {
 describe('/POST sigin in user test', () => {
     it('it should sign in user', (done) => {
        var host = "http://127.0.0.1:8000";
        var path = "/signin";    
        chai.request(host)
        .post(path)
        .set('Content-Type', 'application/json')
        .send({ email: 'yubaraj@chicken1.com', password: 'test1' })
        .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
        });
  });
});