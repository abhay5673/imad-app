var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
     'articleone':{  title: 'article-abhay deshpande',
    heading: 'article-one',
    date:'18th august 2017',
    content:`   <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
             
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
             
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT
             </p>`
     },
     'articletwo': {  title: 'article-abhay deshpande',
    heading: 'article-two',
    date:'18th august 2017',
    content:`   <p>
                  this is my second article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
             
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
             
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT
             </p>`
     },
     'articlethree': { title: 'article-abhay deshpande',
    heading: 'article-three',
    date:'18th august 2017',
    content:`   <p>
                  this is my third article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
             
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
             
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT.
             </p>
               <p>
                  this is my first article ,hello people back with THE MOBILE APP DEVELOPMENT
             </p>`
      } 
    
    
};
function createTemplate(data){
   var heading=data.heading;
   var title=data.title;
   var date=data.date;
   var content=data.content;

var htmlTemplate=`
<html>
     <head>
         <title>
               ${title}
         </title>
             <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body
         <div class='container'>
         <div>
                <a href="/">Home</a>
         </div>
         <h3>
                 ${heading}         </h3>
         <div>
                ${date}
                
         </div>
         <div>
            ${content}
         </div>
         </div>
</body>
</html>`;
  return htmlTemplate;
}
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articlesName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function(req,res){
   res.send(createTemplate(articleone));
});

app.get('/article-two', function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
