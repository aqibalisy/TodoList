import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
let item = ["Eat","Code","Repeat"];
let workitems = [];

app.get('/', (req, res) => {
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let today = new Date();
  let day = today.toLocaleDateString('en-US', options);

  res.render('index.ejs', {
     listTitle: day, 
     items: item });
});

app.post('/', (req, res) => {
  let newItems = req.body.newItem;
  if(req.body.list==="Work list"){
    workitems.push(newItems);
   res.redirect('/work');
  }
  else{
    item.push(newItems);
    res.redirect("/")
  }
});
app.get('/work', (req, res) => {
  res.render("index.ejs",{
listTitle: "Work list",
items: workitems
  })
})

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
