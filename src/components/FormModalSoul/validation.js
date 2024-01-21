import * as Yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = {
  image: ["jpg", "png", "jpeg", "webp"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

const editLocationValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  website: Yup.string()
    .min(7, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  imgCity: Yup.mixed()
    .required("Required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
});
export default editLocationValidation;
