import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
    const capitalGainsData = {
        "capitalGains": {
          "stcg": {
            "profits": 70200.88,
            "losses": 1548.53
          },
          "ltcg": {
            "profits": 5020,
            "losses": 3050
          }
        }
      };
      res.json(capitalGainsData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});