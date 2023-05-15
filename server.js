//connects css
const path = require("path");

//importing the connection of sequelize
const sequelize = require("./config/connection");

const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//add in handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const express = require("express");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

//session
app.use(session(sess));

//handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//css stylesheet in public folder
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// turn on connection of sequelize to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});