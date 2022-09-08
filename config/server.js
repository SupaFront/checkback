module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  host: "buiapipps.herokuapp.com",
  port: "443",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
