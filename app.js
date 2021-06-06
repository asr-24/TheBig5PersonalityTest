const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const statements = ["I am the life of the party","I feel little concern for others","I am always prepared","I get stressed out easily","I have a rich vocabulary","I don't talk a lot","I am interested in people","I leave my belongings around","I am relaxed most of the time","I have difficulty understanding abstract ideas","I feel comfortable around people","I insult people","I pay attention to details","I worry about little things","I have a vivid imagination","I keep in the background","I sympathize with others',feelings","I make a mess of things","I seldom feel blue","I am not interested in abstract ideas","I start conversations","I am not interested in other people's problems","I get chores done right away","I am easily disturbed","I have excellent ideas","I have little to say","I have a soft heart","I often forget to put things back in their proper place","I get upset easily","I do not have a good imagination","I talk to a lot of different people at parties","I am not really interested in others","I like order","I change my mood a lot","I am quick to understand things","I don't like to draw attention to myself","I take time out for others","I shrink my duties","I have frequent mood swings","I use difficult words","I don't mind being the center of attention","I feel others' emotions","I follow a schedule","I get irritated easily","I spend time reflecting on things","I am quiet around strangers","I make people feel at ease","I am exacting in my work","I often feel blue","I am full of ideas"]


app.get("/", function(req, res){
  res.render("home");
});
app.get("/start-test", function(req, res){
  res.render("testLandingPage");
});
app.get("/about-the-test", function(req, res){
  res.render("about");
});
app.post("/test/1", function(req, res){
  let value = 0;
  if(req.body.one==="one"){value = 1;
  }else if(req.body.two==="two"){value = 2;
  }else if(req.body.three==="three"){value = 3;
  }else if(req.body.four==="four"){value = 4;
  }else if(req.body.five==="five"){value = 5;
  }else{value = 100;
  }
  console.log(value);

});
app.get('/test/1', function(req, res){
  res.render("test");
})

app.get('/test/:parameter', function(req, res)  {
  let q = req.params.parameter;
  res.render("test");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
