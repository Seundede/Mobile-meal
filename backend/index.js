const express = require("express")
const stripe = require("stripe")(
  "sk_test_51KOIZDFthq0D0sgzz1EJR1c7Vq1ukxmKiQ8OmInWKR7j6l6tUfOKliWInxUo15oFEb8wQB1IuyiSnXaLHeVvkJiu00Q7CI60YT"
);

const PORT = 4000

const app = express()

app.use(express.static("public"))

app.use(express.json())

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency} = req.body
  const payableAmount = parseInt(amount) * 100
  const paymentIntent = await stripe.paymentIntents.create({
    amount: payableAmount,
    currency: currency
  })
  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})