const express = require('express');
const path = require('path');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')

i18n
  .use(i18nextMiddleware.LanguageDetector)
  .use(Backend)
  .init({
    preload: ['de', 'fr', 'it'], // preload all langages
    ns: ['common', 'home', 'page2'], // need to preload all the namespaces
    detection: {
      order: ['path', 'querystring'],
      lookupPath: 'lang',
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
    },
  }, () => {
    app.prepare()
      .then(() => {
        const server = express();

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n));

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')));

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));

        i18nextMiddleware.addRoute(i18n, '/:lng', ['de', 'fr', 'it'], server, 'get', function(req, res) {
          return app.render(req, res, '/')
        });

        i18nextMiddleware.addRoute(i18n, '/:lng/kochen', ['de', 'fr', 'it'], server, 'get', function(req, res) {
          return app.render(req, res, '/kochen')
        });

        i18nextMiddleware.addRoute(i18n, '/:lng/rezept', ['de', 'fr', 'it'], server, 'get', function(req, res) {
          return app.render(req, res, '/rezept')
        });


        server.get('/', (req, res) => {
          res.redirect(307, `/de`);
        });

        server.get('*', (req, res) => {
          return handle(req, res)
        });

        server.listen(port, (err) => {
          if (err) throw err;
          console.log(`> Ready on http://localhost:${port}`)
        })
      })
  });

