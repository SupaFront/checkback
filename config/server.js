module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  host: "https://buiapipps.herokuapp.com/",
  port: "",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
