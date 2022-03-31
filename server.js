// IMPORT NECESSARY DEPENDENCIES
const express = require("express");
const sequelize = require("./models/db/connection");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const routes = require("./controllers/routes/api")//ADD ROUTES IMPORT
const helpers = ""; //ADD HELPERS IMPORT IF NEEDED
const {
  models
} = require("./models/relationships");

{models}

// INITIALIZE EXPRESS
const app = express();

// SET HANDLEBARS ENGINE
const hbs = exphbs.create({}); //ADD HELPERS IF IMPORTED
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// HANDLE SESSION CREATION AND CONNECT TO DATABSE
const PORT = process.env.PORT || 3001;
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,

    // IF we want to modify session expiration

    // Alternate between main and testing expiration intervals, NOT both.
    // checkExpirationInterval: 300000, // main - 5 minutes
    // expiration: 300000               // main - 5 minutes

    //==========================================================

    // checkExpirationInterval: 5000, // testing - 5 seconds
    // expiration: 5000               // testing - 5 seconds
  }),
};

// CONFIGURE EXPRESS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // will already be looking in public folder, dont reference public in handlebars
app.use(session(sess));
app.use(routes); // this will be used for routes


// ENABLE CONNECTION
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`C-S-S is now running on port ${PORT}`));
});
