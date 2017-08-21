const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Use native promises */
mongoose.Promise = global.Promise;

const TimeStampSchema = new Schema ({
  created_at: Date,
  updated_at: Date
});

TimeStampSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

//findByIdAndUpdate(
//  id,
//  {name:'dan'},
//  {now:'true'}
//)

const CashOutReportSchema = new Schema({
  name:                         String,
  charge_sales_plus_tips:       Number,
  charge_tips:                  Number,
  charge_sales_less_tips:       Number,
  total_sales:                  Number,
  total_charge_sales_plus_tips: Number,
  total_pay_outs:               Number,
  total_charges_plus_pay_outs:  Number,
  total_projected_cash_on_hand: Number,
  total_actual_cash_on_hand:    Number,
  total_cash_amount_difference: Number,
  total_gratuity_min_8_precent: Number,
  digital_signature:            String,
  time_stamp: TimeStampSchema
});

const CashOutReportListSchema = new Schema({
  name: String,
  cash_out_reports: [CashOutReportSchema]
});

const UserSchema = new Schema({
  user_name: String,
  pass_code: { type: Number, required: true, unique: true },
  admin: Boolean,
  cash_out_report_list: [CashOutReportListSchema],
  time_stamp: TimeStampSchema
});

const TimeStampModel = mongoose.model('TimeStamp', TimeStampSchema);
const CashOutReportModel = mongoose.model('CashOutReport', CashOutReportSchema);
const CashOutReportListModel = mongoose.model('CashOutReportList', CashOutReportListSchema);
const UserModel = mongoose.model('User', UserSchema);

module.exports = {
  TimeStamp: TimeStampModel,
  CashOutReport: CashOutReportModel,
  CashOutReportList: CashOutReportListModel,
  User: UserModel
};