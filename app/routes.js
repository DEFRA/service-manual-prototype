//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Manual routes
router.get('/', function (req, res) {
  res.render('manual/index')
})

router.get('/service-standard', function (req, res) {
  res.render('manual/service-standard')
})

router.get('/components', function (req, res) {
  res.render('manual/components')
})

router.get('/patterns', function (req, res) {
  res.render('manual/patterns')
})

router.get('/accessibility', function (req, res) {
  res.render('manual/accessibility')
})

router.get('/working-with-defra', function (req, res) {
  res.render('manual/working-with-defra')
})
