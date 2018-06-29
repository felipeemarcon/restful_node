module.exports = (app) => {
  app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type.', 'text/html');
    res.json({
      users: [{
        name: 'Felipe Marcon',
        email: 'oi@felipemarcon.com.br',
        id: 1
      }]
    });

  });

  app.get('/users/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type.', 'text/html');
    res.json({
      users: []
    });

  });
};