exports.checkLogin = (req, res) => {
  //use await to check from db or hardcode from env
  //then redirect to dashboard
  const uname = process.env.ADMIN_UNAME;
  const pass = process.env.ADMIN_PASS;
  if (req.body.username === uname && req.body.password === pass) {
    console.log(req.body, uname, pass);
    res.status(200).send("All good");
  } else {
    res.status(401).send("You are unauthorized");
  }
};
