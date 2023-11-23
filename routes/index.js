import express from 'express';
import mustache from 'mustache';
import fs from 'fs/promises'

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let indexTemplate = await fs.readFile('./views/index.mustache').then(data => data.toString())
  mustache.parse(indexTemplate)

  let webview = mustache.render(indexTemplate, {
    title: 'Express'
  })

  res.send(webview)
});

export default router;
