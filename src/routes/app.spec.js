'use strict';

const request = require('supertest');
const expect = require('chai').expect;
const bcrypt = require('bcryptjs');
const uuidv1 = require('uuid/v1');
const { pool } = require('../config/dbsetup.js');

const testCard = {
  imageLink:'https://www.google.com/link/tomato.jpg',
  title: 'Tomato',
  owner: 'chrislogin@gmail.com',
  description: 'This is a tomato'
};

let server;
beforeEach(function(done){
  this.timeout(5000);
  server = require('../../server.js');
  pool.query('TRUNCATE users CASCADE');
  pool.query('TRUNCATE cards CASCADE');

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash('test', salt, (err, hash) => {
      pool.query(
        'INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
        ['ChrisLogin', hash, 'chrislogin@gmail.com', 'Manor', 'TX', []],
        (err, response) => {
          if (err) {console.log('err', err); return next(err) }
          done();
        }
      );
    });
  });
});

describe('/POST add-user', () => {
//const {username, password, email, city, state } = req.body;
  it('adds a new user', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', password:'test', email:'chris@gmail.com', city:'Manor', state:'TX' })
        .expect(200)
        .end((err,res) => {
          if (err) {throw err}
          const { username, email, city, state,cardsliked } = res.body;
          expect(res.status).to.eql(200);
          //console.log('res.body', res.body);
          //console.log('res.body.user', res.body.user);
          expect(username).to.eql('chris');
          expect(email).to.eql('chris@gmail.com');
          expect(city).to.eql('Manor');
          expect(state).to.eql('TX');
          expect(cardsliked.length).to.eql(0);
        });

    });
});

describe('/POST login', () => {
  it('logs in a user', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'chrislogin@gmail.com', password: 'test'})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        const { username, email, city, state,cardsliked, cards } = res.body.user;
        expect(res.status).to.eql(200);
        expect(username).to.eql('ChrisLogin');
        expect(email).to.eql('chrislogin@gmail.com');
        expect(city).to.eql('Manor');
        expect(state).to.eql('TX');
        expect(cardsliked.length).to.eql(0);
        expect(cards.length).to.eql(0);
        done();
      });
  });

  it('returns "Incorrect username." if sent invalid username', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'nicole@gmail.com', password: 'test'})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        expect(res.body.error).to.eql("Incorrect username");
        done();
      });
  });

  it('returns "Incorrect password." if sent invalid username', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'chrislogin@gmail.com', password: 'test1'})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        expect(res.body.error).to.eql("Incorrect password.");
        done();
      });
  });
});

describe('/POST add-card', () => {
  it('adds a card', (done) => {
    request(server)
      .post('/add-card')
      .timeout(5000)
      .send(testCard)
      .expect(200)
      .end((err,res) => {
        if (err) {throw err}
        const { imagelink, title, owner, description } = res.body;
        expect(imagelink).to.eql('https://www.google.com/link/tomato.jpg');
        expect(title).to.eql('Tomato');
        expect(owner).to.eql('chrislogin@gmail.com');
        expect(description).to.eql('This is a tomato');
        done();
      })
  });

  it('retrieves user, chris@gmail.com, with added card', (done) => {
      pool.query(
        'INSERT INTO cards VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
        [ uuidv1(),
          'https://www.google.com/link/tomato.jpg',
          'chrislogin@gmail.com',
          'Tomato',
          'This is also  tomato',
          0,
          false
        ],
        (err, response) => {
          if (err) { throw err}
          request(server)
            .post('/login')
            .timeout(5000)
            .send({
              username:'chrislogin@gmail.com',
              password: 'test'
            })
            .expect(200)
            .end((err,res) => {
              if (err) { throw err}
              const { cards } = res.body.user;
              const {imagelink, owner, title, description, likes, ispublic } = cards[0];
              expect(cards.length).to.eql(1);
              expect(imagelink).to.eql('https://www.google.com/link/tomato.jpg');
              expect(owner).to.eql('chrislogin@gmail.com');
              expect(title).to.eql('Tomato');
              expect(description).to.eql('This is also  tomato')
              expect(likes).to.eql(0);
              expect(ispublic).to.eql(false);
              done();
            });
        }
      );
  });
});

describe('/POST like-snapcard and /POST toggle-card-public', () => {
  const id = uuidv1();
  beforeEach(function(done) {
    this.timeout(5000);
    pool.query(
      'INSERT INTO cards VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
      [ id,
        'https://www.google.com/link/tomato.jpg',
        'chrislogin@gmail.com',
        'Tomato',
        'This is also  tomato',
        0,
        false
      ],
      (err, response) => {
        if (err) { throw err}
        done();
      }
    );
  });

  it('likes a snapcard', (done) => {
    request(server)
      .post('/like-snapcard')
      .send({ id })
      .timeout(5000)
      .expect(200)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.card.likes).to.eql(1);
        done();
      });
  });

  it('makes a card public', (done) => {
    request(server)
      .post('/toggle-card-public')
      .send({ id })
      .timeout(5000)
      .expect(200)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.card.ispublic).to.eql(true);
        done();
      });
  });
});

describe('/GET recent-cards/:id ', () => {
  beforeEach(function(done) {
    this.timeout(5000);
    pool.query(
      'INSERT INTO cards VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
      [ uuidv1(),
        'https://www.google.com/link/tomato.jpg',
        'chris@gmail.com',
        'Tomato',
        'This is also  tomato',
        0,
        true
      ],
      (err, response) => {
        if (err) { throw err}
        pool.query(
          'INSERT INTO cards VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
          [ uuidv1(),
            'https://www.google.com/link/lots-of-catnip.jpg',
            'lucy@gmail.com',
            'Catnip',
            'I love catnip',
            0,
            true
          ],
          (err, response) => {
            if (err) { throw err}
            pool.query(
              'INSERT INTO cards VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
              [ uuidv1(),
                'https://www.google.com/link/lots-of-wetfood.jpg',
                'unknown@gmail.com',
                'Chicken and Rice',
                'I love wet food',
                0,
                false
              ],
              (err, response) => {
                if (err) { throw err}
                done();
              }
            );
          }
        );
      }
    );
  });


  it('gets all recent cards not owned by owner@gmail.com', (done) => {
    const id = 'unknown@gmail.com';
    request(server)
      .get('/recent-cards/'+ id)
      .timeout(5000)
      .expect(200)
      .end((err,res) => {
        if (err) { throw err}
        expect(res.body.all.length).to.eql(2); //retrieves both cards
        done();

      })
  });

  it('gets only cards not owned by existing user, chris@gmail.com', (done) => {
    const id = 'chris@gmail.com';
    request(server)
      .get('/recent-cards/'+ id)
      .timeout(5000)
      .expect(200)
      .end((err,res) => {
        if (err) { throw err}
        expect(res.body.all.length).to.eql(1); //retrieves only one card
        done();

      })
  });
});