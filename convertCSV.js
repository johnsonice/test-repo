// read jsonfile module 
var jsonfile = require('jsonfile');

//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

// set the json file name you want to created
var file = './raw_data/school.json'

// read the file and export to json
converter.fromFile("./raw_data/Schools.csv",function(err,result){
 if(err){
     throw err;
 }else{
     jsonfile.writeFile(file,result,{spaces: 2},function(err){
         if(err){
             throw err;  
         }else {
             console.log('Finished');
         }
     })
 }
});