const userAuth = (req, res, next) => {
  console.log(req.params.userId)
  if (req.user && +req.user.id === +req.params.userId )
    return next()
  else
    res.sendStatus(401)
}
module.exports = {userAuth}
