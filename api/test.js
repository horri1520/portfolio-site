module.exports = (req, res) => {
  console.log(typeof req, typeof res)
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
