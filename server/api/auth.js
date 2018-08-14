function userAuthorize (req, res, next) {
  if (req.user && req.user.id === req.params.id )
    return next()
  else
    res.sendStatus(401)
}
module.exports ={ authorize}
