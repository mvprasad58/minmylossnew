var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Substation = new Schema({
subestacion:{
 type:String,
 required:false
},
data:[{"2012":[{"1":[{loss_likelihood : {type:Number,required:false},
    trans_consumption: {type:Number,required:false},
    substation_consumption: {type:Number,required:false},
}],"2":[{loss_likelihood : {type:Number,required:false},
        trans_consumption: {type:Number,required:false},
        substation_consumption: {type:Number,required:false},
       }],"3":[{loss_likelihood : {type:Number,required:false},
            trans_consumption: {type:Number,required:false},
            substation_consumption: {type:Number,required:false},
         }],"4":[{loss_likelihood : {type:Number,required:false},
                trans_consumption: {type:Number,required:false},
                substation_consumption: {type:Number,required:false},
      }],"5":[{loss_likelihood : {type:Number,required:false},
                    trans_consumption: {type:Number,required:false},
                    substation_consumption: {type:Number,required:false},
           }],"6":[{loss_likelihood : {type:Number,required:false},
                        trans_consumption: {type:Number,required:false},
                        substation_consumption: {type:Number,required:false},
                    }],"7":[{loss_likelihood : {type:Number,required:false},
                            trans_consumption: {type:Number,required:false},
                            substation_consumption: {type:Number,required:false},
                         }],"8":[{loss_likelihood : {type:Number,required:false},
                                trans_consumption: {type:Number,required:false},
                                substation_consumption: {type:Number,required:false},
                               }],"9":[{loss_likelihood : {type:Number,required:false},
                                    trans_consumption: {type:Number,required:false},
                                    substation_consumption: {type:Number,required:false},
                                   }],"10":[{loss_likelihood : {type:Number,required:false},
                                        trans_consumption: {type:Number,required:false},
                                        substation_consumption: {type:Number,required:false},
                                 }],"11":[{loss_likelihood : {type:Number,required:false},
                                            trans_consumption: {type:Number,required:false},
                                            substation_consumption: {type:Number,required:false},
                                        }],"12":[{loss_likelihood : {type:Number,required:false},
                                                trans_consumption: {type:Number,required:false},
                                                substation_consumption: {type:Number,required:false},
                                          }]}]
    }]
});
module.exports = mongoose.model('Substation', Substation);