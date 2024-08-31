const express = require("express");
const cors = require("cors");
const pools = require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/adduser", (req, res) => {
  const user_name = req.body["user_name"];
  const full_name = req.body["full_name"];
  const email = req.body["email"];
  const phone_number = req.body["phone_number"];
  const user_password = req.body["user_password"];

  const insertval =
    'INSERT INTO login(full_name, user_name, email, phone_number, user_password) VALUES($1, $2, $3, $4, $5)';
  const values = [full_name, user_name, email, phone_number, user_password];

  pools

    .query(insertval, values)
   
    .then((response) => {
      console.log("Data saved successfully");
      console.log(response);
      res.status(200).send("Data saved successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
   
   
});

// sign in end point;

app.post("/signin", (req, res) => {
  const user_name = req.body["user_name"];
  const user_password = req.body["user_password"];

  // Query the database to check user credentials
  const checkCredentialsQuery = 'SELECT * FROM login WHERE user_name = $1 AND user_password = $2';
  const values = [user_name, user_password];

  pools
    .query(checkCredentialsQuery, values)
    .then((result) => {
      if (result.rows.length > 0) {
        res.status(200).send("Sign-in successful");
      } else {
        res.status(401).send("Invalid credentials");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
});

//for nav bar profile;

app.get("/getuser", (req, res) => {
  // Retrieve the user name from your authentication system or wherever it's stored
  const userName = req.query["user_name"];
  console.log("your username is: "+userName);
  res.json({ user_name: userName });
});


//place endpoint

app.post("/addplace", (req, res) => {
  const place = req.body["place"];
  

  const insertval =
    'INSERT INTO visitplace(place) VALUES($1)';
  const values = [place];

  pools

    .query(insertval, values)
   
    .then((response) => {
      console.log("Data saved successfully");
      console.log(response);
      res.status(200).send("Data saved successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
   
   
});

//retrive data from pgAdmin
app.get("/getplace", async (req, res) => {
  try {
    // Query your database to retrieve the stored place name
    const { rows } = await pools.query('SELECT place FROM visitplace ORDER BY id DESC LIMIT 1');
    const placeName = rows[0].place;

    res.json({ place_name: placeName });
  } catch (error) {
    console.error("Error fetching place name:", error);
    res.status(500).send("Internal Server Error");
  }
});








app.listen(4000, () => console.log("Server is running on port 4000"));


