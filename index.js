import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
let item = []

app.get('/', (req, res) => {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let today = new Date();
 let day = today.toLocaleDateString("en-US", options)
 
 res.render('index.ejs', {kindOfDay:day, items: item})
});

app.post('/', (req, res) => {
 let newItems = req.body.newItem
 item.push(newItems)
 res.redirect("/")
});

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
