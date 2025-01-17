import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;

const trainingPartnerSchema = new Schema(
  {
    password: { type: String, required: true },
    organizationName: { type: String, required: true },
    organizationCategory: { type: String, required: true },
    applicationStatus: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Approved", "Rejected"],
    },
    applicationViewed: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "TrainingPartner",
      enum: ["TrainingPartner"],
    },
    centerId: { type: String, required: true },
    tpCode: { type: String, required: true },
    scheme: { type: String, required: true },
    affiliation: { type: String },
    dateOfIncorporation: { type: Date },
    registeredOfficeAddress: { type: String },
    registeredOfficeDist: { type: String },
    registeredOfficeCity: { type: String },
    registeredOfficeState: { type: String },
    registeredOfficePin: { type: String },
    registeredOfficeTelephone: { type: String },
    registeredOfficeMobile: { type: String },
    registeredOfficeFax: { type: String },
    registeredOfficeEmail: { type: String,required:true },
    registeredOfficeGst: { type: String },
    regionalStateOfficeAddress: { type: String },
    regionalStateOfficeDist: { type: String },
    regionalStateOfficeCity: { type: String },
    regionalStateOfficeState: { type: String },
    regionalStateOfficePin: { type: String },
    regionalStateOfficeTelephone: { type: String },
    regionalStateOfficeMobile: { type: String },
    regionalStateOfficeFax: { type: String },
    regionalStateOfficeEmail: { type: String },
    regionalStateOfficeGst: { type: String },
    website: { type: String },
    pan: { type: String },
    prnNo: { type: String },
    headOwnerName: { type: String },
    headOwnerDob: { type: Date },
    headOwnerCity: { type: String },
    headOwnerResAddress: { type: String },
    headOwnerPermanentAddress: { type: String },
    headOwnerMobile: { type: String },
    headOwnerAltMobile: { type: String },
    headOwnerEmail: { type: String },
    headOwnerQualification: { type: String },
    headOwnerWorkExperience: { type: String },
    headOwnerPanNo: { type: String },
    headOwnerAadharNo: { type: String },
    headOwnerPromoter1: { type: String },
    headOwnerPromoter2: { type: String },
    headOwnerPromoter3: { type: String },
    projectContactPersonName: { type: String },
    projectContactPersonDesignation: { type: String },
    projectContactPersonCity: { type: String },
    projectContactPersonMobile: { type: String },
    projectContactPersonAltMobile: { type: String },
    projectContactPersonResAddress: { type: String },
    projectContactPersonPermanentAddress: { type: String },
    projectContactPersonEmail: { type: String },
    projectContactPersonAltEmail: { type: String },
    paymentStatus: { type: String },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

// ** hasing the password before saving the document
trainingPartnerSchema.pre("save", function (next) {
  const trainingPartner = this;
  const SALT = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(trainingPartner.password, SALT);
  trainingPartner.password = encryptedPassword;
  next();
});

// ** compare password function for login
trainingPartnerSchema.methods.checkPassword = function check(
  userInputPlainPassword
) {
  return bcrypt.compareSync(userInputPlainPassword, this.password);
};

// ** generate jwt token for middleware verification
trainingPartnerSchema.methods.generateJwt = function generate() {
  return jwt.sign(
    {
      id: this._id,
      role: this.role,
    },
    "this is a secrete a key",
    { expiresIn: "1d" }
  );
};

const TrainingPartner = mongoose.model(
  "TrainingPartner",
  trainingPartnerSchema
);
export default TrainingPartner;
