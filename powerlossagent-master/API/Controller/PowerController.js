'use strict';
var mongoose = require('mongoose');
var Transformer = mongoose.model('Transformer');
var Meter = mongoose.model('Meter');
var Substation = mongoose.model('Substation');
var meterdocs;
exports.processRequest = function (req, res) {
  switch (req.body.queryResult.intent.displayName) {
    case "MActiveConsumption":
      getMActiveConsumption(req, res)
      break;
    case "MActiveConsumptionC":
      getMActiveConsumption(req, res)
      break;
    case "MCalcLossLikelihood":
      getMCalcLossLikelihood(req, res)
      break;
    case "MCalcLossLikelihoodC":
      getMCalcLossLikelihood(req, res)
      break;
    case "MReactiveConsumption":
      getMReactiveConsumption(req, res)
      break;
    case "MReactiveConsumptionC":
      getMReactiveConsumption(req, res)
      break;
    case "MAgeofMeter":
      getMAgeofMeter(req, res)
      break;
    case "MAgeofMeterC":
      getMAgeofMeter(req, res)
      break;
    case "MStdDeviation":
      getMStd(req, res)
      break;
    case "MStdDeviationC":
      getMStd(req, res)
      break;
    case "MTotConsumption":
      getMTotConsumption(req, res)
      break;
    case "MTotConsumptionC":
      getMTotConsumption(req, res)
      break;
    case "TLossLikelihood":
      getTLossLikelihood(req, res)
      break;
    case "TLossLikelihoodC":
      getTLossLikelihood(req, res)
      break;
    case "TLossPercentage":
      getTLossPercentage(req, res)
      break;
    case "TLossPercentageC":
      getTLossPercentage(req, res)
      break;
    case "TMeterCons":
      getTMeterCons(req, res)
      break;
    case "TMeterConsC":
      getTMeterCons(req, res)
      break;
    case "TStdDeviation":
      getTStd(req, res)
      break;
    case "TStdDeviationC":
      getTStd(req, res)
      break;
    case "TTotConsumption":
      getTTotAct(req, res)
      break;
    case "TTotConsumptionC":
      getTTotAct(req, res)
      break;
    case "TActiveCons":
      getTActiveCons(req,res)
      break;
    case "TActiveConsC":
      getTActiveCons(req,res)
      break;
    case "TReactiveCons":
      getTRActiveCons(req,res)
      break;
    case "TReactiveConsC":
      getTRActiveCons(req,res)
      break;
    case "SLossLikelihood":
      getSLossLikelihood(req, res)
      break;
    case "SLossLikelihoodC":
      getSLossLikelihood(req, res)
      break;
    case "SConsumption":
      getSConsumption(req, res)
      break;
    case "SConsumptionC":
      getSConsumption(req, res)
      break;
    case "STransConsumption":
      getSTransConsumption(req, res)
      break;
    case "STransConsumptionC":
      getSTransConsumption(req, res)
      break;
    case "SActCons":
      getSActCons(req,res)
      break;
    case "SActConsC":
      getSActCons(req,res)
      break;
    case "SReactCons":
      getSRActCons(req,res)
      break;
    case "SReactConsC":
      getSRActCons(req,res)
      break;
    case "TMetersConnected":
      getTMetersConnected(req, res)
      break;
    case "TMetersConnectedC":
      getTMetersConnected(req, res)
      break;
    case "STransConnected":
      getSTransConnected(req, res)
      break;
    case "STransConnectedC":
      getSTransConnected(req, res)
      break;
  }
};

function getMActiveConsumption(req, res) {


  //console.log(Meter);
  var meterToSearch = req.body.queryResult.parameters.meter ? req.body.queryResult.parameters.meter : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Meter.findOne({ medidor_id: meterToSearch }, 'data.' + yod + '.' + mod1 + '.active_consum', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var bindex = rettext.indexOf("}");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The meter's active consumption is " + rettext.substring(b, bindex) + " units.",



        source: 'meter info'
      });
    }

  });


}



function getMCalcLossLikelihood(req, res) {


  //console.log(Meter);
  var meterToSearch = req.body.queryResult.parameters.meter ? req.body.queryResult.parameters.meter : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Meter.findOne({ medidor_id: meterToSearch }, 'data.' + yod + '.' + mod1 + '.loss_likelihood', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var cindex = rettext.indexOf("}");

      //console.log(rettext);
      return res.json({
        fulfillmentText: "The loss likelihood is " + rettext.substring(b, cindex) + ".\nTo find information about another meter/transformer/substation or a different month-year,please say OK.",




        source: 'meter info'
      });
    }

  });


}

function getMReactiveConsumption(req, res) {


  //console.log(Meter);
  var meterToSearch = req.body.queryResult.parameters.meter ? req.body.queryResult.parameters.meter : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Meter.findOne({ medidor_id: meterToSearch }, 'data.' + yod + '.' + mod1 + '.reactive_consum', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var dindex = rettext.indexOf("}");
      //console.log(rettext.substring(b, dindex));
      //console.log(rettext);
      return res.json({
        fulfillmentText: "The meter's reactive consumption is " + rettext.substring(b, dindex) + " units.",


        source: 'meter info'
      });
    }

  });


}







function getMAgeofMeter(req,res)
{
  

  //console.log(Meter);
  var meterToSearch = req.body.queryResult.parameters.meter ? req.body.queryResult.parameters.meter : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Meter.findOne({ medidor_id: meterToSearch }, 'data.' + yod + '.' + mod1 + '.age_of_meter', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var dindex = rettext.indexOf("}");
      //console.log(rettext);
      return res.json({
        fulfillmentText: "The meter's age is " + rettext.substring(b, dindex) + " days.",


        source: 'meter info'
      });
    }

  });
}



function getMStd(req, res) {


  //console.log(Meter);
  var meterToSearch = req.body.queryResult.parameters.meter ? req.body.queryResult.parameters.meter : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Meter.findOne({ medidor_id: meterToSearch }, 'data.' + yod + '.' + mod1 + '.std', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var gindex = rettext.indexOf("}");
      //console.log(rettext);
      return res.json({
        fulfillmentText: "The meter's standard deviation is " + rettext.substring(b, gindex) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",




        source: 'meter info'
      });
    }

  });


}

function getMTotConsumption(req, res) {


  //console.log(Meter);
  var meterToSearch = req.body.queryResult.parameters.meter ? req.body.queryResult.parameters.meter : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Meter.findOne({ medidor_id: meterToSearch }, 'data.' + yod + '.' + mod1 + '.total_consum', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var hindex = rettext.indexOf("}");
      //console.log(rettext);
      return res.json({
        fulfillmentText: "The meter's consumption for the given month is " + rettext.substring(b, hindex) + " units.",




        source: 'meter info'
      });
    }

  });


}

function getTLossLikelihood(req, res) {


  //console.log(Meter);
  var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.loss_likelihood', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var a = rettext.indexOf("}");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The loss likelihood value is " + rettext.substring(b, a) + " units.",

        source: 'transf info'
      });
    }

  });


}

function getTLossPercentage(req, res) {


  //console.log(Meter);
  var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.loss_percentage', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b = rettext.indexOf("}");
      var a=rettext.lastIndexOf(":")+1;
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The percentage loss is " + rettext.substring(a, b) + " units.",

        source: 'transf info'
      });
    }

  });


}


function getTMeterCons(req, res) {


  //console.log(Meter);
  var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.meter_con_act', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var c = rettext.indexOf("}");
      var b=rettext.lastIndexOf(":")+1;
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The combined consumption of all the meters of the transformer is " + rettext.substring(b, c) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",


        source: 'transf info'
      });
    }

  });


}


function getTStd(req, res) {


  //console.log(Meter);
  var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.standard_deviation', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var d = rettext.indexOf("}");
      var b=rettext.lastIndexOf(":")+1;

      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The standard deviation of the transformer is " + rettext.substring(b, d) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",

        source: 'transf info'
      });
    }

  });


}


function getTTotAct(req, res) {


  //console.log(Meter);
  var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.totalizer_con_act', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var e = rettext.indexOf("}");
      var b=rettext.lastIndexOf(":")+1;
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The totalizer consumption of the transformer is " + rettext.substring(b, e) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",
        source: 'transf info'
      });
    }

  });


}

function getTActiveCons(req,res)
{
   //console.log(Meter);
   var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
   var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
   var yod = edate.getFullYear().toString();
 
 
   //console.log(obb);
 
   //var ob1=yod;
   var mod = edate.getMonth() + 1;
   var mod1 = mod.toString();
 
 
   //console.log(typeof(ob2));
   //var yearindex=edate.getFullyear();
   //var monthindex=edate.getMonth()+1;   
   Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.totalizer_active_consum', function (err, meterdoc) {
 
     if (err) {
       return res.json({
         fulfillmentText: 'Something went wrong!',
 
         source: 'meter info'
       });
     }
     //console.log(Meter);
     //console.log(meterdoc);
     if (meterdoc) {
       //var ddate={fy:Object(yod),sm:Object(mod)};
       //console.log(meterdoc);
       // console.log(ddate);
 
       // var yr=JSON.parse(yearindex);
 
       // console.log(JSON.parse(yearindex));
       var rettext = JSON.stringify(meterdoc);
       var b =rettext.lastIndexOf(":")+1;
       var e = rettext.indexOf("}");
       //console.log(rettext);
       //console.log(rettext.indexOf("avg_consumption"));
       //console.log(rettext.search("avg_consumption"));
       return res.json({
         fulfillmentText: "The transformer's totalizer's active consumption is " + rettext.substring(b, e) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",
         source: 'transf info'
       });
     }
 
   });
 

}

function getTRActiveCons(req,res)
{
   //console.log(Meter);
   var transfToSearch = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
   var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
   var yod = edate.getFullYear().toString();
 
 
   //console.log(obb);
 
   //var ob1=yod;
   var mod = edate.getMonth() + 1;
   var mod1 = mod.toString();
 
 
   //console.log(typeof(ob2));
   //var yearindex=edate.getFullyear();
   //var monthindex=edate.getMonth()+1;   
   Transformer.findOne({ transformador_id: transfToSearch }, 'data.' + yod + '.' + mod1 + '.totalizer_reactive_consum', function (err, meterdoc) {
 
     if (err) {
       return res.json({
         fulfillmentText: 'Something went wrong!',
 
         source: 'meter info'
       });
     }
     //console.log(Meter);
     //console.log(meterdoc);
     if (meterdoc) {
       //var ddate={fy:Object(yod),sm:Object(mod)};
       //console.log(meterdoc);
       // console.log(ddate);
 
       // var yr=JSON.parse(yearindex);
 
       // console.log(JSON.parse(yearindex));
       var rettext = JSON.stringify(meterdoc);
       var b =rettext.lastIndexOf(":")+1;
       var e = rettext.indexOf("}");
       //console.log(rettext);
       //console.log(rettext.indexOf("avg_consumption"));
       //console.log(rettext.search("avg_consumption"));
       return res.json({
         fulfillmentText: "The transformer's totalizer's reactive consumption is " + rettext.substring(b, e) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",
         source: 'transf info'
       });
     }
 
   });
 

}



function getSLossLikelihood(req, res) {


  //console.log(Meter);
  var subsToSearch = req.body.queryResult.parameters.substation ? req.body.queryResult.parameters.substation : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();
  var subs = subsToSearch.toUpperCase();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Substation.findOne({ subestacion: subs }, 'data.' + yod + '.' + mod1 + '.loss_likelihood', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var f = rettext.indexOf("}");
      var b=rettext.lastIndexOf(":")+1;
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The loss likelihood of the substation for the given month-year is " + rettext.substring(b, f) + ".\nTo find information about another meter/transformer/substation or a different month-year,please say OK",


        source: 'subs info'
      });
    }

  });


}

function getSActCons(req, res) {


  //console.log(Meter);
  var subsToSearch = req.body.queryResult.parameters.substation ? req.body.queryResult.parameters.substation : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();
  var subs = subsToSearch.toUpperCase();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Substation.findOne({ subestacion: subs }, 'data.' + yod + '.' + mod1 + '.substation_active_consumption', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var f = rettext.indexOf("}");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The substation's active consumption for the given month-year is " + rettext.substring(b, f) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",


        source: 'subs info'
      });
    }

  });


}



function getSRActCons(req, res) {


  //console.log(Meter);
  var subsToSearch = req.body.queryResult.parameters.substation ? req.body.queryResult.parameters.substation : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();
  var subs = subsToSearch.toUpperCase();


  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Substation.findOne({ subestacion: subs }, 'data.' + yod + '.' + mod1 + '.substation_reactive_consumption', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var b=rettext.lastIndexOf(":")+1;
      var f = rettext.indexOf("}");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The substation's reactive consumption for the given month-year is " + rettext.substring(b, f) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",


        source: 'subs info'
      });
    }

  });


}


function getSTransConsumption(req, res) {


  //console.log(Meter);
  var subsToSearch = req.body.queryResult.parameters.substation ? req.body.queryResult.parameters.substation : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();
  var subs = subsToSearch.toUpperCase();



  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Substation.findOne({ subestacion: subs }, 'data.' + yod + '.' + mod1 + '.trans_consumption', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var g = rettext.indexOf("}");
      var b=rettext.lastIndexOf(":")+1;
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The total consumption of all the transformers connected to the substation is " + rettext.substring(b, g) + " units.\nIf you want to find information about another substation or during another month-year,please say OK",

        source: 'subs info'
      });
    }

  });


}

function getSConsumption(req, res) {


  //console.log(Meter);
  var subsToSearch = req.body.queryResult.parameters.substation ? req.body.queryResult.parameters.substation : 'Unknown';
  var edate = new Date(req.body.queryResult.parameters.dateperiod.endDate);
  var yod = edate.getFullYear().toString();
  var subs = subsToSearch.toUpperCase();



  //console.log(obb);

  //var ob1=yod;
  var mod = edate.getMonth() + 1;
  var mod1 = mod.toString();


  //console.log(typeof(ob2));
  //var yearindex=edate.getFullyear();
  //var monthindex=edate.getMonth()+1;   
  Substation.findOne({ subestacion: subs }, 'data.' + yod + '.' + mod1 + '.substation_consumption', function (err, meterdoc) {

    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    //console.log(Meter);
    //console.log(meterdoc);
    if (meterdoc) {
      //var ddate={fy:Object(yod),sm:Object(mod)};
      //console.log(meterdoc);
      // console.log(ddate);

      // var yr=JSON.parse(yearindex);

      // console.log(JSON.parse(yearindex));
      var rettext = JSON.stringify(meterdoc);
      var h = rettext.indexOf("}");
      var b=rettext.lastIndexOf(":");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      return res.json({
        fulfillmentText: "The substation's consumption for the given month-year is " + rettext.substring(b, h) + " units.\nTo find information about another meter/transformer/substation or a different month-year,please say OK",

        source: 'subs info'
      });
    }

  });



}

function getTMetersConnected(req, res) {
  var transfo = req.body.queryResult.parameters.transformer ? req.body.queryResult.parameters.transformer : 'Unknown';
  Meter.find({ transformador_id: transfo }, 'medidor_id', function (err, listdoc) {
    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    if (listdoc) {
      //var rettext=JSON.stringify(listdoc);
      // var h=rettext.indexOf("}");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      var ln = listdoc.length;
      var i = 0;
      var strng = "";
      for (i = 0; i < ln; i++) { strng = strng + ", " + JSON.stringify(listdoc[i].medidor_id); }
      return res.json({
        fulfillmentText: "The " + ln + " meters connected to the given transformer are" + strng + ".\nTo find more information, please say Ok.",
        source: 'transf info'
      });
    }

  });
}


function getSTransConnected(req, res) {
  var subso = req.body.queryResult.parameters.substation ? req.body.queryResult.parameters.substation : 'Unknown';
  var subso1 = subso.toUpperCase();
  Transformer.find({ subestacion: subso1 }, 'transformador_id', function (err, listdoc) {
    if (err) {
      return res.json({
        fulfillmentText: 'Something went wrong!',

        source: 'meter info'
      });
    }
    if (listdoc) {
      //var rettext=JSON.stringify(listdoc);
      // var h=rettext.indexOf("}");
      //console.log(rettext);
      //console.log(rettext.indexOf("avg_consumption"));
      //console.log(rettext.search("avg_consumption"));
      var ln = listdoc.length;
      var i = 0;
      var strng = "";
      for (i = 0; i < ln; i++) { strng = strng + ", " + JSON.stringify(listdoc[i].transformador_id); }
      return res.json({
        fulfillmentText: "The " + ln + " transformers connected to the given substation are" + strng + ".To find more information, please say Ok.",
        source: 'transf info'
      });
    }

  });
}


