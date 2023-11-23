import express from 'express';
import mustache from 'mustache';
import fs from 'fs/promises'

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let indexTemplate = await fs.readFile('./views/index.mustache').then(data => data.toString())
  let headerTemplate = await fs.readFile('./views/template/headerTemplate.mustache').then(data => data.toString())
  let footerTemplate = await fs.readFile('./views/template/footerTemplate.mustache').then(data => data.toString())


  let webview = mustache.render(indexTemplate, {
    title: 'Expressjs'
  }, {
    header: headerTemplate,
    footer: footerTemplate
  })

  res.send(webview)
});

export default router;
