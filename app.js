const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const statements = ["I am the life of the party","I feel little concern for others","I am always prepared","I get stressed out easily","I have a rich vocabulary","I don't talk a lot","I am interested in people","I leave my belongings around","I am relaxed most of the time","I have difficulty understanding abstract ideas","I feel comfortable around people","I insult people","I pay attention to details","I worry about little things","I have a vivid imagination","I keep in the background","I sympathize with others' feelings","I make a mess of things","I seldom feel blue","I am not interested in abstract ideas","I start conversations","I am not interested in other people's problems","I get chores done right away","I am easily disturbed","I have excellent ideas","I have little to say","I have a soft heart","I often forget to put things back in their proper place","I get upset easily","I do not have a good imagination","I talk to a lot of different people at parties","I am not really interested in others","I like order","I change my mood a lot","I am quick to understand things","I don't like to draw attention to myself","I take time out for others","I shrink my duties","I have frequent mood swings","I use difficult words","I don't mind being the center of attention","I feel others' emotions","I follow a schedule","I get irritated easily","I spend time reflecting on things","I am quiet around strangers","I make people feel at ease","I am exacting in my work","I often feel blue","I am full of ideas"]

app.get("/", function(req, res){
  points = [];
  i = 1;
  res.render("home");
  console.log(points);
});
app.get("/start-test", function(req, res){
  points = [];
  i = 1;
  res.render("testLandingPage");
});
app.get("/about-the-test", function(req, res){
  points = [];
  i = 1;
  res.render("about");
});
let points = [];
let i = 1;

app.post("/test/:here", function(req, res){
  let value = 0;
  if(req.body.one==="one"){value = 1;
  }else if(req.body.two==="two"){value = 2;
  }else if(req.body.three==="three"){value = 3;
  }else if(req.body.four==="four"){value = 4;
  }else if(req.body.five==="five"){value = 5;
  }else{value = 100;
  }

  points.push(value);
  console.log(points);
  res.render("test",{
    number: i+1,
    statement: statements[i]
  })
  i++;
});

app.get('/test/:here', function(req, res)  {

  res.render("test",{
    number: parseInt(req.params.here,10)+1,
    statement: statements[parseInt(req.params.here,10)]
  });
});

app.post('/results', function(req, res)  {
  let value = 0;
  if(req.body.one==="one"){value = 1;
  }else if(req.body.two==="two"){value = 2;
  }else if(req.body.three==="three"){value = 3;
  }else if(req.body.four==="four"){value = 4;
  }else if(req.body.five==="five"){value = 5;
  }else{value = 100;
  }
  points.push(value);
  let r = calc(points);
  const o = r[0];
  const c = r[1];
  const e = r[2];
  const a = r[3];
  const n = r[4];
  const k = r[5];



  let openness = '', oA = [], conscientiousness = '', cA = [], extraversion = '', eA = [], agreeableness = '', aA = [], neuroticism = '', nA = [];
  if (o>58){
    openness = opennessHigh;
    oA = oAhigh;
  } else {
    openness = opennessLow;
    oA = oAlow;
  }
  if (c>55){
    conscientiousness = conscientiousnessHigh;
    cA = cAhigh;
  } else {
    conscientiousness = conscientiousnessLow;
    cA = cAlow;
  }
  if (e>51){
    extraversion = extraversionHigh;
    eA = eAhigh;
  } else {
    extraversion = extraversionLow;
    eA = eAlow;
  }
  if (a>63){
    agreeableness = agreeablenessHigh;
    eA = eAhigh;
  } else {
    agreeableness = agreeablenessLow;
    aA = aAlow;
  }
  if (n>54){
    neuroticism = neuroticismHigh;
    nA = nAhigh;
  } else {
    neuroticism = neuroticismLow;
    nA = nAlow;
  }

  res.render("results",{
    one: o,
    openness: openness,
    oA: oA,
    two: c,
    conscientiousness: conscientiousness,
    cA: cA,
    three: e,
    extraversion: extraversion,
    eA: eA,
    four: a,
    agreeableness: agreeableness,
    aA: aA,
    five: n,
    neuroticism: neuroticism,
    nA: nA,
    theseMany: k,
  })

})

opennessHigh = "People who are high in Openness are comfortable with abstract ideas. They enjoy talking and thinking about theories and concepts, even if the concepts are unproven. They appreciate creative, original, innovative ideas, and enjoy thinking about the future and what it might hold. Because they appreciate ideas for their own sake, they usually enjoy the arts and other cultural pursuits. They are interested in having experiences that expand their minds and encourage them to think about things in a new way. A high score on openness can mean you have broad interests. You may enjoy solving problems with new methods and find it easy to think about things in different ways. Being open to new ideas may help you adjust easily to change. Just make sure to keep an eye out for any situations where you might need to establish boundaries, whether that be with family members or your work-life balance.";
oAhigh = ['Creative','Unconventional','Imaginative','Original','Artistic','Enjoy trying new things','Willing to consider new ideas']
opennessLow = "People who are low in Openness are concrete, straightforward thinkers. They distrust ideas and theories that do not have practical, real-world applications. They prefer tradition and conventional ways over new, untested ideas. They are more realistic than creative and often have difficulty imagining things that they have not personally experienced. Because of this, they may be uninterested in trying new experiences, preferring instead to stick with what they know. A low openness score can mean you consider concepts in straightforward ways. Others likely see you as being grounded and down-to-earth."
oAlow = ['Practical','Traditional','Conventional','Conservative','Habitual','Avoid change']

conscientiousnessHigh = "Highly Conscientious people are hardworking and responsible.  They have a high degree of willpower and resist temptation and distraction to stay focused on their goals. Conscientious people are able to delay gratification, doing things that are difficult or boring in the moment in order to work toward a long-term achievement. They tend to be orderly, organized, and reliable. If you are a conscientious person, you might follow a regular schedule and have a knack for keeping  track of details. You likely deliberate over options and work hard to achieve your goals. Coworkers and friends might see you as a reliable, fair person.You may tend to micromanage situations or tasks. You might also be cautious or difficult to please."
cAhigh = ['Orderly','Prepared','Dependable','Determined','Ambitious','Dutiful','Persistent']
conscientiousnessLow = "People who are low in Conscientiousness are less interested in long-term goals and more interested in responding to the moment. They are more fun-loving than hardworking, and are easily distracted. People low in Conscientiousness tend to abandon plans easily when something more attractive arises. They are often disorganized and go about tasks in a haphazard manner. A low conscientiousness score might mean you prefer a setting without structure. You may prefer doing things at your own pace to working on a deadline. This might make you appear unreliable to others."
cAlow = ['Spontaneous','Adaptable','Impulsive','Disorganized','Haphazard']

extraversionHigh = "Highly Extraverted people are outgoing, energetic, and friendly. They enjoy stimulation from other people and their environment, and gravitate to busy and active places. They express themselves easily and like to talk. Extraverts are enthusiastic about life and describe their experiences with colorful expressions of positive emotion. If you score high on extraversion, you might consider yourself an extrovert. You might enjoy attention and feel recharged after spending time with friends. You likely feel your best when in a large group of people. On the other hand, you may have trouble spending long periods of time alone."
eAhigh = ['Enthusiastic','Energetic','Speak without thinking','Excitable','Friendly','Gregarious','Seek excitement or adventure']
extraversionLow = "Introverted people are reserved, calm, and low-key. They are easily overstimulated and avoid busy and noisy environments as they find them to be overwhelming. They often find it difficult to express themselves and may prefer others to do the talking. They are generally placid and not easily excited. A low extraversion score can mean you prefer to spend time alone or with a small group of close friends. You might also be a more private person when it comes to sharing details about your life. This might come across as standoffish to others."
eAlow = ['Reserved','Calm','Aloof','Introspective','Quiet','Feel worn out after socializing']

agreeablenessHigh = "Highly Agreeable people are sympathetic, cooperative, and accommodating. They usually want to get along with other people more than they want to achieve their own individual goals, so they are willing to compromise to help others. They are altruistic and may spend significant time and energy helping other people."
aAhigh = ['Accommodating','Helpful','Sympathetic','Selfless','Altruistic','Caring','Honest']
agreeablenessLow = "People who are low in Agreeableness are competitive and self-interested. They do not care much about getting along with the group and are willing to upset others to pursue their own goals. They are disinterested in compromise and do not get satisfaction out of helping others selflessly. They prefer to feel that they have come out on top. A low agreeableness score may mean you tend hold grudges. You might also be less sympathetic with others. But you  are also likely avoid the pitfalls of comparing yourself to others or caring about what others think of you."
aAlow = ['Competitive','Stubborn','Argumentative','Self-Interested','Rational','Brash','Less compassionate']


neuroticismHigh = "Highly Neurotic people struggle with negative emotions. They frequently feel anger, sadness, anxiety, self-consciousness, and other difficult feelings. They tend to be more vulnerable to stressors and less able to overcome problematic situations. They doubt their abilities and feel uncomfortable with themselves. If you score high on neuroticism, you may blame yourself when things go wrong. You might also get frustrated with yourself easily, especially if you make a mistake. Chances are, you’re also prone to worrying. But you’re likely also more introspective than others, which helps you to examine and understand your feelings."
nAhigh = ['Vulnerable','Unstable','Anxious','Moody','Self-conscious','Prone to stress','Struggle with difficult situations']
neuroticismLow = "People who are low in Neuroticism are resilient and do not react easily to stress. They experience few negative emotions and cope well when life is difficult. They easily overcome stressful situations to get back on track. They are not often sad, angry, or depressed, and generally feel confident in themselves. A low neuroticism score can mean you’re confident. You may have more resilience and find it easy to keep calm under stress. Relaxation might also come more easily to you. Try to keep in mind that this might not be as easy for those around you, so be patient."
nAlow = ['Stable','Stoic','Resilient','Optimistic','Self-Confident','Carefree']




function calc(arr){
  let k = 50;
  for (var j = 0; j < arr.length  ; j++){
    if (arr[j]===100){arr[j]=3; k --;}
  }

  const one = (20+arr[0]-arr[5]+arr[10]-arr[15]+arr[20]-arr[25]+arr[30]-arr[35]+arr[40]-arr[45])*2.5;
  const two = (14-arr[1]+arr[6]-arr[11]+arr[16]-arr[21]+arr[26]-arr[31]+arr[36]+arr[41]+arr[46])*2.5;
  const three = (14+arr[2]-arr[7]+arr[12]-arr[17]+arr[22]-arr[27]+arr[32]-arr[37]+arr[42]+arr[47])*2.5;
  const four = (38-arr[3]+arr[8]-arr[13]+arr[18]-arr[23]-arr[28]-arr[33]-arr[38]-arr[43]-arr[48])*2.5;
  const five = (8+arr[4]-arr[9]+arr[14]-arr[19]+arr[24]-arr[29]+arr[34]+arr[39]+arr[44]+arr[49])*2.5;

  var final = [one, two, three, four, five, k];
  return final;

}



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
