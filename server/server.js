require('dotenv').config();
const express = require("express");
const stripe = require("stripe")("sk_test_51QYyPcEUUfeNESL5x28UUSi34G5MOsi09Qplx6gj7X55aHFNeaka6uWTVR1nbG8eMxhrbgoJowtMQ06ULjjjJb3J00xNirBOI4");
const app = express();
const cors = require("cors"); // Import CORS

app.use(express.json());

app.use(cors({
    origin: "*", // Allow only your React frontend to make requests
    methods: ["GET", "POST"], // Allow only GET and POST methods
  }));
  
app.use(express.json());

app.post("/api/checkout_sessions", async (req, res) => {
  try {
    var { lineItems } = req.body; // Destructure priceId and quantity from the request body

    if (!lineItems || !Array.isArray(lineItems)) {
      return res.status(400).json({ error: "Invalid or missing lineItems array" });
    }
    
    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: lineItems,
      mode: 'payment',
      return_url: 'http://192.168.1.28:4000/store/confirmation',
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log("Server is running on http://localhost:3001"));