
// The JavaScript client works in both Node.js and the browser.


// Install the client from NPM
npm install clarifai

// Require the client
var Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  '{clientId}',
  '{clientSecret}'
);

// You can also use the client directly in your browser:
<script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
<script>
  var app = new Clarifai.App(
    '{clientId}',
    '{clientSecret}'
  );
</script>

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  '{clientId}',
  '{clientSecret}'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'http://www.securitylab.ru/upload/iblock/3b5/3b588f461503830b09bd9d5e5440779b.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);

// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  '{clientId}',
  '{clientSecret}'
);

// add some inputs
app.inputs.create('http://www.slate.com/content/dam/slate/uploads/2016/02/27/512501530-republican-presidential-candidate-donald-trump-speaks.jpg.CROP.promo-xlarge2.jpg').then(
  searchForTrump,
  function(err) {
    console.error(err);
  }
);

// search for concepts
function searchForTrump(response) {
  app.inputs.search({
    concept: {
      name: 'trump'
    }
  }).then(
    function(response) {
      console.log(response);
    },
    function(response) {
      console.error(response);
    }
  );
}
// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  '{clientId}',
  '{clientSecret}'
);

// add inputs with concepts
app.inputs.create([{
  "url": "http://static2.politico.com/dims4/default/035efea/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fa2%2F01%2F4fa959254c2f9216910f47649004%2F160114-donald-trump-2-ap-1160.jpg",
  "concepts": [
    { "id": "person", "value": false },
    { "id": "trump", "value": true }
  ]
}, {
  "url": "http://static2.businessinsider.com/image/55d5d78fecad04766dbf52a8/how-much-donald-trump-makes-in-speaking-fees-compared-to-everyone-else.jpg",
  "concepts": [
    { "id": "person", "value": false },
    { "id": "trump", "value": true }
  ]
}, {
  "url": "https://img.buzzfeed.com/buzzfeed-static/static/2015-06/7/10/campaign_images/webdr09/20-times-josh-peck-was-the-most-relatable-person--2-28523-1433687653-0_dblbig.jpg",
  "concepts": [
    { "id": "person", "value": true },
    { "id": "trump", "value": false }
  ]
}, {
  "url": "http://i.telegraph.co.uk/multimedia/archive/03463/putin_3463140k.jpg",
  "concepts": [
    { "id": "person", "value": true },
    { "id": "trump", "value": false }
  ]
}]).then(
  createModel,
  errorHandler
);

// once inputs are created, create model by giving name and list of concepts
function createModel(inputs) {
  app.models.create('people', ["trump", "person"]).then(
    trainModel,
    errorHandler
  );
}

// after model is created, you can now train the model
function trainModel(model) {
  model.train().then(
    predictModel,
    errorHandler
  );
}

// after training the model, you can now use it to predict on other inputs
function predictModel(model) {
  model.predict(['http://www.metalinjection.net/wp-content/uploads/2016/11/Donald-Trump.jpg', 'http://ichef.bbci.co.uk/news/660/cpsprodpb/493A/production/_90464781_mannybbc.jpg']).then(
    function(response) {
      console.log(response);
    }, errorHandler
  );
}

function errorHandler(err) {
  console.error(err);
}
