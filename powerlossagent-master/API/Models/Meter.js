var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MeterZoomMax=new Schema({
    total_consum : {type:Number,required:false},
    loss_likelihood: {type:Number,required:false},
    loss_percentage: {type:Number,required:false},
    std: {type:Number,required:false},
    avg_consumption: {type:Number,required:false},
    max_consumption:{type:Number,required:false},
    min_consumption:{type:Number,required:false}
});
var MonthSchema=new Schema({

           "1":MeterZoomMax,
           "2":MeterZoomMax,
           "3":MeterZoomMax,
           "4":MeterZoomMax,
           "5":MeterZoomMax,
           "6":MeterZoomMax,
           "7":MeterZoomMax,
           "8":MeterZoomMax,
           "9":MeterZoomMax,
           "10":MeterZoomMax,
           "11":MeterZoomMax,
           "12":MeterZoomMax

});
var DataS=new Schema({

    "2011":MonthSchema,
    "2012":MonthSchema,
    "2013":MonthSchema,
    "2014":MonthSchema,
    "2015":MonthSchema,
    "2016":MonthSchema,
    "2017":MonthSchema

});
var Meter= new Schema({
medidor_id:{
 type:Number,
 required:false
},
transformador_id:{type:Number,required:false},
data:DataS
});
module.exports = mongoose.model('Meter', Meter);
