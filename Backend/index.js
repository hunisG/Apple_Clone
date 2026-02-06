const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const myExpress = express();
myExpress.use(cors());
myExpress.use(express.json());
myExpress.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,
  user: "myDBuser",
  password: "myDBuser",
  database: "myDB"
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected");
});

myExpress.get("/", (req, res) => {
  res.send("Backend is running");
});


myExpress.get("/iphones", (req, res) => {
  const sql = `
    SELECT 
      p.Product_id,
      p.Product_name,
      p.Product_url,

      d.Product_brief_description,
      d.Product_description,
      d.Product_img,
      d.Product_link,

      pr.Starting_price,
      pr.Price_range

    FROM Products p
    JOIN Product_Description d ON p.Product_id = d.Product_id
    JOIN Product_Price pr ON p.Product_id = pr.Product_id;
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.log("Error fetching products:", err.sqlMessage);
      return res.status(500).send("Error fetching products");
    }

    res.json(results);
  });
});



myExpress.get("/iphone/:id", (req, res) => {
  const productId = req.params.id;

  const sql = `
    SELECT 
      p.Product_id,
      p.Product_name,
      p.Product_url,

      d.Product_brief_description,
      d.Product_description,
      d.Product_img,
      d.Product_link,

      pr.Starting_price,
      pr.Price_range

    FROM Products p
    JOIN Product_Description d ON p.Product_id = d.Product_id
    JOIN Product_Price pr ON p.Product_id = pr.Product_id
    WHERE p.Product_id = ?;
  `;

  connection.query(sql, [productId], (err, results) => {
    if (err) {
      console.log("Error fetching single product:", err.sqlMessage);
      return res.status(500).send("Error fetching product");
    }

    // results is an array. The first object is only needed.
    res.json(results[0]);
  });
});


myExpress.listen(3001, () => {
  console.log("Backend running at http://localhost:3001");
});
