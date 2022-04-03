const router = require("express").Router();

const apiRoute = require("./routes/api");
const dashboard = require("./routes/dashboard");
const homepage = require("./routes/home");

router.get("/", (req, res) => {
  res.redirect("/homepage");
});
router.use("/api", apiRoute);
router.use("/dashboard", dashboard);
router.use("/homepage", homepage);

module.exports = router;
