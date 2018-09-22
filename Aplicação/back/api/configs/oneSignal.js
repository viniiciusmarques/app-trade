const oneSignal = require('onesignal-node');

module.exports = (app) => {
  const client = new oneSignal.Client({
    userAuthKey: process.env.USER_KEY,
    app: { appAuthKey: process.env.API_KEY, appId: process.env.APP_ID }
  });
  
  app.client = client;
}
