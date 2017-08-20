require("dotenv").config();

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const TimeStamp = require('../models/time-stamp');
const CashOutReport = require('../models/cash-out-report');
const CashOutReportList = require('../models/cash-out-report-list');
const User = require('../models/user');

/* Use native promises */
mongoose.Promise = global.Promise;
const db = mongoose.connection;

/* Remove seeds */

TimeStamp.remove({}, function(error){
  console.log(error);
});

CashOutReport.remove({}, function(error){
  console.log(error);
});

CashOutReportList.remove({}, function(error){
  console.log(error);
});

User.remove({}, function(error){
  console.log(error);
});

/* Seeded cash out form data */
const CashOutReportOne = new CashOutReport({
  charge_sales_plus_tips:       240.00,
  charge_tips:                  40.00,
  charge_sales_less_tips:       200.00,
  total_sales:                  480.00,
  total_charge_sales_plus_tips: 240.00,
  total_pay_outs:               0.00,
  total_charges_plus_pay_outs:  240.00,
  total_projected_cash_on_hand: 240.00,
  total_actual_cash_on_hand:    288.00,
  total_cash_amount_difference: -48.00,
  total_gratuity_min_8_precent: 38.40,
  digital_signature:            'Sean',
  time_stamp: '2017-08-11T20:40:10:301Z',
});

const CashOutReportTwo = new CashOutReport({
  charge_sales_plus_tips:       360.00,
  charge_tips:                  60.00,
  charge_sales_less_tips:       300.00,
  total_sales:                  720.00,
  total_charge_sales_plus_tips: 360.00,
  total_pay_outs:               0.00,
  total_charges_plus_pay_outs:  360.00,
  total_projected_cash_on_hand: 360.00,
  total_actual_cash_on_hand:    360.00,
  total_cash_amount_difference: 0.00,
  total_gratuity_min_8_precent: 57.60,
  digital_signature:            'Sean',
  time_stamp: '2017-08-12T20:40:10:301Z',
});

const CashOutReportThree = new CashOutReport({
  charge_sales_plus_tips:      500.00,
  charge_tips:                  100.00,
  charge_sales_less_tips:       400.00,
  total_sales:                  1000.00,
  total_charge_sales_plus_tips: 500.00,
  total_pay_outs:               0.00,
  total_charges_plus_pay_outs:  500.00,
  total_projected_cash_on_hand: 500.00,
  total_actual_cash_on_hand:    500.00,
  total_cash_amount_difference: 0.00,
  total_gratuity_min_8_precent: 80.00,
  digital_signature:            'Brian',
  time_stamp: '2017-08-13T20:40:10:301Z',
});

/* Seeded user data */

const Brian = new User ({
  user_name: 'Brian',
  pass_code: '4321',
  admin: false,
  user_list: [],
  cash_out_report_list: [],
  time_stamp: '2016-09-26T20:40:10:301Z'

});

const Gilly = new User({
  user_name: 'Gilly',
  pass_code: '1234',
  admin: true,
  cash_out_report_list: [],
  time_stamp: '2016-07-23T20:40:10:101Z'
});

const Sean = new User ({
  user_name: 'Sean',
  pass_code: '0019',
  admin: false,
  user_list: [],
  cash_out_report_list: [],
  time_stamp: '2016-08-20T20:40:10:201Z'
});

/* Save seeds */

CashOutReportOne.save( (error)=>{
  if (error) console.log('Cash Out Form One user' + error);
  console.log('Cash Out Form One added');
});

CashOutReportTwo.save( (error)=>{
  if (error) console.log('Cash Out Form Two user' + error);
  console.log('Cash Out Form Two added');
});

CashOutReportThree.save( (error)=>{
  if (error) console.log('Cash Out Form Three user' + error);
  console.log('Cash Out Form Three added');
});


Brian.save( (error)=>{
  if (error) console.log('Brian user' + error);
  console.log('Brian added');
});

Gilly.save( (error)=>{
  if (error) console.log('Gilly user' + error);
  console.log('Gilly added');
});

Sean.save( (error)=>{
  if (error) console.log('Sean user' + error);
  console.log('Sean added');
});


/* CONNECTION EVENTS */
db.once('open', function() {
  console.log("Opened mongoose.");
});

db.once('close', function() {
  console.log("Closed mongoose.");
});

db.on('connected', function() {
  console.log('Mongoose connected to ' + db.host + ':' + db.port + '/' + db.name);
});

db.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

module.exports = db;