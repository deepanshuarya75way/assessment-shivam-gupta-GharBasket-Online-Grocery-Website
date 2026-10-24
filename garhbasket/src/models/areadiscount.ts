import mongoose from 'mongoose'

// const mongoose = require ("mongoose");

const areaDiscountSchema = new mongoose.Schema({
  area:{
    type:String,
    required : true,
    unique:true,
  },
  discountPercentage:{
    type : Number,
    required:true,
    min:0,
    max:50
  },

  isActive:{
    type:Boolean,
    default:true
  }

  
});

module.exports = mongoose.model("AreaDiscount",areaDiscountSchema);