//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Manual routes
router.get('/', function (req, res) {
  res.render('service-manual-home')
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

router.get('/service-manual', function (req, res) {
  res.render('service-manual-home')
})

// Sustainability Topic Routes
router.get('/manual/sustainability', function (req, res) {
  res.render('manual/sustainability/index')
})

router.get('/manual/sustainability/objectives', function (req, res) {
  res.render('manual/sustainability/objectives')
})

router.get('/manual/sustainability/process', function (req, res) {
  res.render('manual/sustainability/process')
})

router.get('/manual/sustainability/metrics', function (req, res) {
  res.render('manual/sustainability/metrics')
})

// Existing page keeping older naming for now
router.get('/manual/sustainability/principles', function (req, res) {
  res.render('manual/sustainability/principles')
})
