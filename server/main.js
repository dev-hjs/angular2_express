const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const dbConfig   = require('./conf/dbconfig.js');
const mysql = require('mysql');
const mysql2 = require('promise-mysql');

var connection = mysql.createConnection(dbConfig);
var connection2 = mysql2.createConnection;

app.set('port', (process.env.PORT || 80));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

var generateWhere = function(paramObj){
    var whereStr = '';
    Object.keys(paramObj).forEach((key)=>{
        whereStr += ' and ' + key + '=? ';
    });
    return whereStr;
}

var generateWhereValue = function(paramObj){
    var whereValue = [];
    Object.keys(paramObj).forEach((key)=>{
        whereValue.push(paramObj[key]);
    });
    return whereValue;
}
var errorHandle = (err)=>{
    var result = {};
    result["error"] = {"code" : err.code,
    "no" : err.errno,
    "msg" : err.sqlMessage
    };
    return result;
}
var rowsHandle = (rows)=>{
    var result = {};
    result["list"] = rows;
    return result;
}

app.get('/api/users',(req, res, next)=>{
    var result = {};
    var paramObj = JSON.parse(req.query.user);
    console.log("param=" + paramObj);
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 '
    sql += generateWhere(paramObj);
    console.log(sql);
    var values = generateWhereValue(paramObj);
    console.log(values);
    connection.query(sql, values, (err, rows)=>{
        if(err) throw err;
        console.log("rows=>" + rows);
        result["list"] = rows;
        res.json(result);
        next();
    });
})
app.get('/api/users',(req,res,next)=>{
    console.log(req.query.user);
});

app.get('/api/users2',(req, res, next)=>{
    var paramObj = JSON.parse(req.query.user);
    var sql = 'SELECT userNo, userName, userId, userPwd,complete from user_info where 1=1 '
    sql += generateWhere(paramObj);
    var values = generateWhereValue(paramObj);
    connection2(dbConfig).then((conn)=>{
        return conn.query(sql, values);
    })
    .then(rowsHandle)
    .catch(errorHandle)
    .then((result)=>{
        console.log(result);
        res.json(result);
        next();
    });
});

app.get('/api/users2',(req, res, next)=>{
    console.log('next!!');
})

app.get('/api/userhis/:userNo',(req, res, next)=>{
    var values = [req.params.userNo];
    var sql = "select userNo, userData from user_his where userNo=?";
    connection2(dbConfig).then((conn)=>{
        return conn.query(sql, values);
    })
    .then(rowsHandle)
    .catch(errorHandle)
    .then((result)=>{
        console.log(result);
        res.json(result);
    });
})

app.post('/api/users',(req, res, next)=>{
    for(var key in req.body){
        console.log(key);
        console.log(req.body[key]);
    }
})

app.post('/api/users',(req,res,next)=>{
    var sql = "insert into user_info";
    spl +="userId, userName, userPwd, complete";
    sql +="values(?,?,?,?)";
    var pm = req.body;
    var values = [pm.userId, pm.userName, pm.userPwd, pm.complete];
    var result = {};
    sql = 'SELECT userNo, userName, userId, usrId, userPwd, complete from user_info where 1=1'
    connection2(dbConfig).then((conn)=>{      
        return conn.query(sql);
    })
    .then(rowsHandle)
    .catch(errorHandle)
    .then((result)=>{
        console.log(result);
        res.json(result);
    })
})

app.post('/api/users',(req,res,next)=>{
    var sql = "insert into user_info";
    spl +="userId, userName, userPwd, complete";
    sql +="values(?,?,?,?)";
    var pm = req.body;
    var values = [pm.userId, pm.userName, pm.userPwd, pm.complete];
    var result = {};
    connection2(dbConfig).then((con)=>{      
        console.log(result);
        result["error"] = {"code" : 200, "no" : 20, "msg" : "정상적으로 입력되었습니다."};
        return result;
    })
    .catch(errorHandle)
    .then((result)=>{
        res.json(result);
    })
})
app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});