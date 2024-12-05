const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfKtcQWSAL7dqtnSDo-QjppAQeNSsISsk5WJiOqOBb5NfKGGUMhip1Oko8Cy4JeTy2mArvsy989VNQnp",
  client_secret: "EAU7zrhlYv9SKkqLWc-Kbad6Xc1nDS43Zi1z6h5HQJiNCbJEOxR8wW_Z-P1qsUrWZPyg9rm-TG0UWGAl",
});

module.exports = paypal;
