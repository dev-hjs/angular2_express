const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const us = require('./service/user_service');
const uc = require('./controller/user_controller');

app.set('port', (process.env.PORT || 80));//포트 선언한다고 실행되지 않음 아래에 app.listen을 선언해주어야 함

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/users',uc);
// app.get('/api.users', (req,res,next)=>{
//     var po ={}
//     if(req.query.user){
//         po = JSON.parse(req.query.user);
//     }
//     console.log(po);
//     us.selectUser(po)
//     .then((result)=>{
//         res.json(result);
//     });
// });

// app.get('/api.users/his/:userNo',(req,res,next)=> {
//     var po = {"userNo":req.params.userNo};
//     console.log(po);
//     us.selectUserHis(po)
//     .then((result)=>{
//         console.log(result);
//         res.json(result);
//     });
// });

// app.post('/api.users', (req,res,next)=> {
//     us.insertUser(req.body)
//     .then((result)=>{
//         res.json(result);
//     })
// })


//포트를 열어줘야 실행이 됨
app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'),function(){
    console.log('해당포트로 서버실행 =>'+app.get('port'));
});
//포트를 열어줘야 실행이 됨