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

  pool.query('TRUNCATE cards CASCADE');

  pool.query('TRUNCATE users CASCADE', [], (error, resp) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash('test', salt, (err, hash) => {
        pool.query(
          'INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
          ['ChrisLogin', hash, 'chrislogin@gmail.com', 'Manor', 'TX', []],
          (err, response) => {
            if (err) { throw err}
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash('test', salt, (err, hash2) => {
                pool.query(
                  'INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
                  ['Nicole Cantu', hash2, 'nicole@gmail.com', 'Austin', 'TX', []],
                  (err, response) => {
                    if (err) {console.log('err', err); return next(err) }
                    done();
                  }
                );
              });
            });
          }
        );
      });
    });
  });

});

/*************************************/

describe('/POST add-user', () => {
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
          expect(username).to.eql('chris');
          expect(email).to.eql('chris@gmail.com');
          expect(city).to.eql('Manor');
          expect(state).to.eql('TX');
          expect(cardsliked.length).to.eql(0);
        });
  });

  it('handles error if attempting to add an existing user', function(done) {
      this.timeout(5000);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash('test', salt, (err, hash) => {
          pool.query(
            'INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
            ['ChrisDuplicate1', hash, 'duplicate@gmail.com', 'Manor', 'TX', []],
            (err, response) => {
              if (err) { throw err }
              request(server)
                .post('/add-user')
                .timeout(5000)
                .send({username:'ChrisDuplicate1', password:'test', email:'duplicate@gmail.com', city:'Manor', state:'TX' })
                .expect(400)
                .end((err,res) => {
                  if (err) {throw err}
                  expect(res.body.message).to.eql('User Already Exists.');
                  done();
                });
            }
          );
          });
      });

  });

  it('handles error if attempting to add a new user and missing username', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({password:'test', email:'chris2@gmail.com', city:'Manor', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user and missing password', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', email:'chris@gmail.com', city:'Manor', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user and missing email', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', password:'test', city:'Manor', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user and missing city', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', password:'test', email:'chris@gmail.com', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user and missing state', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', password:'test', email:'chris@gmail.com', city:'Manor' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user with falsey email', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', password:'test', email:'', city:'Manor', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user with falsey username', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'', password:'test', email:'chris@gmail.com', city:'Manor', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });

  it('handles error if attempting to add a new user with falsey password', function() {
      this.timeout(5000);
      request(server)
        .post('/add-user')
        .timeout(5000)
        .send({username:'Chris', password:'', email:'chris@gmail.com', city:'Manor', state:'TX' })
        .expect(400)
        .end((err,res) => {
          if (err) {throw err}
          expect(res.body.message).to.eql('Missing user information');
        });
  });
});

/*************************************/

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

  it('returns "Incorrect username/password." if sent invalid username', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'nicole1@gmail.com', password: 'test'})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        expect(res.body.error).to.eql("Incorrect username/password.");
        done();
      });
  });

  it('returns "Incorrect username/password." if sent invalid username', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'chrislogin@gmail.com', password: 'test1'})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        expect(res.body.error).to.eql("Incorrect username/password.");
        done();
      });
  });

  it('returns "Incorrect username/password." if sent creds without username', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'', password: 'test'})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        expect(res.body.error).to.eql("Missing credentials");
        done();
      });
  });

  it('returns "Incorrect username/password." if sent creds without password', (done) => {
    request(server)
      .post('/login')
      .timeout(5000)
      .send({username:'chrislogin@gmail.com', password: ''})
      .expect(200)
      .end((err, res) => {
        if (err) {throw err}
        expect(res.body.error).to.eql("Missing credentials");
        done();
      });
  });
});

/*************************************/

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

  it('handles error if adding card without title', (done) => {
    request(server)
      .post('/add-card')
      .timeout(5000)
      .send({
        imageLink:'https://www.google.com/link/tomato.jpg',
        owner: 'chrislogin@gmail.com',
        description: 'This is a tomato'
      })
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing Card Information');
        done();
      })
  });

  it('handles error if adding card without imagelink', (done) => {
    request(server)
      .post('/add-card')
      .timeout(5000)
      .send({
        title: 'Tomato',
        owner: 'chrislogin@gmail.com',
        description: 'This is a tomato'
      })
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing Card Information');
        done();
      })
  });

  it('handles error if adding card without description', (done) => {
    request(server)
      .post('/add-card')
      .timeout(5000)
      .send({
        imageLink:'https://www.google.com/link/tomato.jpg',
        title: 'Tomato',
        owner: 'chrislogin@gmail.com',
      })
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing Card Information');
        done();
      })
  });

  it('handles error if adding card without owner', (done) => {
    request(server)
      .post('/add-card')
      .timeout(5000)
      .send({
        imageLink:'https://www.google.com/link/tomato.jpg',
        title: 'Tomato',
        description: 'This is a tomato'
      })
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing Card Information');
        done();
      })
  });

  it('handles error if adding card with falsey owner', (done) => {
    request(server)
      .post('/add-card')
      .timeout(5000)
      .send({
        imageLink:'https://www.google.com/link/tomato.jpg',
        title: 'Tomato',
        owner: '',
        description: 'This is a tomato'
      })
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing Card Information');
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

/*************************************/

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
      .send({ id, email: 'nicole@gmail.com' })
      .timeout(5000)
      .expect(200)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.card.likes).to.eql(1);
        done();
      });
  });

  it('handles error if send like-snapcard request with invalid id', (done) => {
    request(server)
      .post('/like-snapcard')
      .send({ id:'invalid id', email: 'nicole@gmail.com' })
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Cannot locate card.');
        done();
      });
  });

  it('handles error if send like-snapcard request with invalid email', (done) => {
    request(server)
      .post('/like-snapcard')
      .send({ id, email:'invalid email' })
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing valid information');
        done();
      });
  });

  it('handles error if send like-snapcard request with no id', (done) => {
    request(server)
      .post('/like-snapcard')
      .send({ email:'invalid email' })
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing information to like card.');
        done();
      });
  });

  it('handles error if send like-snapcard request with falsey id', (done) => {
    request(server)
      .post('/like-snapcard')
      .send({ id:'', email:'nicole@gmail.com' })
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing information to like card.');
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

  it('handles error if attempting to make card public by sending invalid id', (done) => {
    request(server)
      .post('/toggle-card-public')
      .send({ id:'invalid id' })
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Cannot locate card.');
        done();
      });
  });

  it('handles error if attempting to make card public without sending id', (done) => {
    request(server)
      .post('/toggle-card-public')
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing information to modify card.');
        done();
      });
  });

  it('handles error if attempting to make card public by sending falsey id', (done) => {
    request(server)
      .post('/toggle-card-public')
      .send({ id:'' })
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) {throw err}
        expect(res.body.message).to.eql('Missing information to modify card.');
        done();
      });
  });
});

/*************************************/

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
                false,
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

  it('handles error if getting all cards with no id supplied', (done) => {
    request(server)
      .get('/recent-cards/')
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) { throw err}
        expect(res.body.message).to.eql('Missing id');
        done();

      })
  });

  it('handles error if getting all cards with falsey id supplied', (done) => {
    request(server)
      .get('/recent-cards/ ')
      .timeout(5000)
      .expect(400)
      .end((err,res) => {
        if (err) { throw err}
        expect(res.body.message).to.eql('Missing id');
        done();

      })
  });
});