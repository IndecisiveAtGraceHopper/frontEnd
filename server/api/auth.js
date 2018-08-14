const userAuthorize = (req, res, next) => {
  if (req.user && req.user.id === req.params.userId )
    return next()
  else
    res.sendStatus(401)
}
module.exports = userAuthorize
