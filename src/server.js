const express = require("express");
const { Client } = require("pg");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

const port = process.env.PORT || '8080';
app.listen(port, console.log(`I am listening to ${port}`));

app.post("/los/list", async (req, res) => {
  try {
    const { grade, sub, trimester } = req.body;
    const selection = await client.query(
      "SELECT * FROM outcomes WHERE grade = $1 AND sub = $2 AND trimester = $3 ",
      [grade, sub, trimester]
    );

    res.json(selection.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.post("/los/list/all", async (req, res) => {
  try {
    const { grade, sub } = req.body;
    const selection = await client.query(
      "SELECT * FROM outcomes WHERE grade = $1 AND sub = $2 ",
      [grade, sub]
    );

    res.json(selection.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// app.delete("/los/list/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteLo = await client.query("DELETE FROM outcomes WHERE id = $1", [
//       id,
//     ]);
//     res.json("Lo was deleted!");
//   } catch (error) {
//     console.error(err.message);
//   }
// });
// app.post("/los", async (req, res) => {
//   try {
//     const { grade, sub, lo_id, lo, trimester } = req.body;
//     const newLo = await client.query(
//       "INSERT INTO outcomes (grade,sub,lo_id,lo,trimester) VALUES($1, $2, $3, $4, $5) RETURNING *",
//       [grade, sub, lo_id, lo, trimester]
//     );

//     res.json(newLo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.put("/los/list/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { loUpdate } = req.body;
//     const updatelo = await client.query(
//       "UPDATE outcomes SET lo = $1 WHERE id = $2",
//       [loUpdate, id]
//     );

//     res.json("lo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.get('/', (req, res)=> { res.send(client.mut) })
app.post("/st", async (req, res) => {
  try {
    const { esis } = req.body;
    const student = await client.query("SELECT * FROM mut WHERE esis = $1", [
      esis
    ]);

    res.json(student.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
