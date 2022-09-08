module.exports = ({ env }) => ({
  url: "https://buiapipps.herokuapp.com/",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
