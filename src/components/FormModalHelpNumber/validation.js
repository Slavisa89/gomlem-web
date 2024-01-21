import * as Yup from "yup";

const editLocationValidation = Yup.object().shape({
  organizationName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .min(1000000000, "Too Short!")
    .max(9999999999, "Too Long!")
    .required("Required"),
});
export default editLocationValidation;
