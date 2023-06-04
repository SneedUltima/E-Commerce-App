require("dotenv").config();
const stripe = require("stripe")(process.env.PUBLIC_STRIPE_SECRET_KEY);
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1NE6icJwd2yy0rs95tdeHFbA" },
        { shipping_rate: "shr_1NE6jSJwd2yy0rs9xdXdH2Cy" },
      ],
      line_items: req.body.map((item) => {
        const image = item.image[0].asset._ref;
        const newImage = image
          .replace(
            "image-",
            "https://cdn.sanity.io/images/2x4y1z9t/production/"
          )
          .replace("-jpg", ".jpg");

        return {
          price_data: {
            currency: "aud",
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}`,
    };

    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message);
  }
});

app.listen(4242, () => console.log("Running on port 4242"));
