// cloud-function-razorpay.js (template for verifying Razorpay webhook — Node 18+)
const functions = require('firebase-functions');
const crypto = require('crypto');

exports.verifyRazorpay = functions.https.onRequest((req, res) => {
  const secret = functions.config().razorpay.secret; // set via firebase functions:config:set
  const body = JSON.stringify(req.body);
  const expectedSignature = crypto.createHmac('sha256', secret).update(body).digest('hex');
  const signature = req.headers['x-razorpay-signature'];
  if(expectedSignature === signature){
    // verify successful; update Firestore user payment status
    // const payment = req.body.payload.payment.entity;
    // await admin.firestore().collection('payments').doc(payment.id).set(payment);
    res.status(200).send('ok');
  } else {
    res.status(400).send('invalid signature');
  }
});
