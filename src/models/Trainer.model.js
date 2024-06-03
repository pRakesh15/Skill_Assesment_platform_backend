import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  educationQualification_1: {
    type: String,
  },
  educationQualification_2: {
    type: String,
  },
  educationQualification_3: {
    type: String,
  },
  educationQualification_4: {
    type: String,
  },
  certification_course: {
    type: String,
  },
  relevant_industryExperience: {
    type: String,
  },
  other_expreience: {
    type: String,
  },
  PAN_CARD_NO: {
    type: String,
    required: [true, "Pancard no is required"],
  },
  AADHAR_NO: {
    type: String,
    required: [true, "Aadhar number is required"],
  },
  state: {
    type: String,
    required: [true, "state is missing"],
  },
  city: {
    type: String,
    required: [true, "state is missing"],
  },
  district: {
    type: String,
    required: [true, "district is missing"],
  },
  pincode: {
    type: String,
    required: [true, "pincode is missing"],
  },
  certifiedIn: {
    type: String,
  },
  coursecode: {
    type: String,
    required: [true, "course code is required"],
  },
  sector: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  PRN_NO: {
    type: String,
    required: [true, "this field is required"],
  },
});

const Trainer = mongoose.model("Trainer",TrainerSchema);
export default Trainer;