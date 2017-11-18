//var config = require('config.json');
var express = require('express');
var router = express.Router();
var us = require('../service/user_service');

router.get('/', selectUser);
router.get('/his/:userNo', selectUserHis);
router.post('/', insertUser);
router.get('/login', login);

module.exports = router;

function login(req,res,next){
    var po = {}
    if(req.query.user){
        po = JSON.parse(req.query.user);
    }
    us.loginUser(po)
    .then((result)=>{
        console.log(result);
        res.json(result);
    }).catch(result=>{
        console.log(result);
        res.json(result);
    })
}

function insertUser(req,res,next){
    var po = {}
    if(req.query.user){
        po = JSON.parse(req.query.user);
    }
    us.loginUser(po)
    .then((result)=>{
        console.log(result);
        res.json(result);
    }).catch(result=>{
        console.log(result);
        res.json(result);
    })
}   

function selectUser(req,res,next){
    var po = {}
    if(req.query.user){
        po = JSON.parse(req.query.user);
    }
    console.log(po);
    us.selectUser(po)
    .then((result)=>{
        res.json(result);
    }).catch((result)=>{
        res.json(result);       
    });
};

function selectUserHis(req,res,next){
    var po = {"userNo":req.params.userNo}
    if(req.query.user){
        po = JSON.parse(req.query.user);
    }
    console.log(po);
    us.selectUser(po)
    .then((result)=>{
        res.json(result);
    }).catch((result)=>{
        res.json(result);       
    });
};