require("dotenv").config();

module.exports = Object.assign(
  {},
  {
    PORT_FXSTUDIO: 3300,
    PORT_PROJECT: 3301,
    RUN_PROJECT: true
  },
  process.env
);
