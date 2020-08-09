const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image':"https://placeimg.com/64/64/1",
            'name':'주성민',
            'birthday':'970227',
            'gender':'남자',
            'job':'student'
          },
          {
            'id':2,
            'image':"https://placeimg.com/64/64/2",
            'name':'홍길동',
            'birthday':'960221',
            'gender':'남자',
            'job':'model'
          },
          {  
            'id':3,
            'image':"https://placeimg.com/64/64/3",
            'name':'장발장',
            'birthday':'910217',
            'gender':'남자',
            'job':'professor'
          }
    ])
})
app.listen(port,()=>console.log(`Listening on port ${port}`));