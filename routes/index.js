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

router.get('/array', async (req, res) => {
  let arrays = ['Bangkit', 'Juang', 'Raharjo']

  let arrayTemplate = await fs.readFile('./views/array.mustache').then(data => data.toString())
  let headerTemplate = await fs.readFile('./views/template/headerTemplate.mustache').then(data => data.toString())
  let footerTemplate = await fs.readFile('./views/template/footerTemplate.mustache').then(data => data.toString())

  let webview = mustache.render(arrayTemplate, {
    array: arrays,
  }, {
    header: headerTemplate,
    footer: footerTemplate
  })

  res.send(webview)
})

router.get('/object', async (req, res) => {
  let objects = [
    {
      firstName: 'Juang',
      lastName: 'Raharjo'
    },{
      firstName: 'Bagus',
      lastName: 'Latami'
    },{
      firstName: 'Mujahid',
      lastName: 'Muslim'
    },{
      firstName: 'Arif',
      lastName: 'Ilahaka'
    },{
      firstName: 'Xuan',
      lastName: 'Hai'
    },
  ]

  let objectTemplate = await fs.readFile('./views/object.mustache').then(data => data.toString())
  let headerTemplate = await fs.readFile('./views/template/headerTemplate.mustache').then(data => data.toString())
  let footerTemplate = await fs.readFile('./views/template/footerTemplate.mustache').then(data => data.toString())

  let webview = mustache.render(objectTemplate, {
    object: objects
  }, {
    header: headerTemplate,
    footer: footerTemplate
  })

  res.send(webview)
})

export default router;
