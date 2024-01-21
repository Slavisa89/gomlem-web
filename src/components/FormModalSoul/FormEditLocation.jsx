import Icon from "@components/Icon";
import { Form, Formik, Field, ErrorMessage } from "formik";
import editLocationValidation from "./validation";
import { twMerge } from "tailwind-merge";
import CityImg from "./CityImg";
export default function FormEditLocation({ data }) {
  return (
    <Formik
      initialValues={{
        name: data?.name || "",
        address: data?.address || "",
        website: data?.website || "",
        imgCity: data?.imgCity || "",
      }}
      onSubmit={async (values, actions) => {
        alert(JSON.stringify(values));

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("address", values.address);
        formData.append("website", values.website);
        if (values.imgCity) {
          formData.append("imgCity", values.imgCity);
        }
        // Add Logic Send To Api
        // const res = editLocationApi(formData)
        actions.setSubmitting(false);
      }}
      validationSchema={editLocationValidation}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <CityImg
            error={errors.imgCity}
            value={values.imgCity}
            handlerChange={setFieldValue}
          />
          {/* Name Form */}
          <label className="relative block">
            <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
              Name
            </p>
            <Field
              name="name"
              placeholder="Add Shul Name"
              className={twMerge(
                "text-sm font-normal border  placeholder:text-text-softGary text-text border-text-softGary w-full p-3 rounded-[20px]",
                errors.name && touched.name && "border-red text-red"
              )}
            />
            <p className="absolute text-xs transition-all duration-200 -bottom-5 left-2 text-red">
              <ErrorMessage name="name"></ErrorMessage>
            </p>
          </label>

          {/* Address Form */}
          <label className="relative block">
            <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
              Address
            </p>
            <Field
              name="address"
              placeholder="Add Shul Address"
              className={twMerge(
                "text-sm font-normal border placeholder:text-text-softGary text-text border-text-softGary w-full p-3 rounded-[20px]",
                errors.address && touched.address && "border-red text-red"
              )}
            />
            <p className="absolute text-xs transition-all duration-200 -bottom-5 left-2 text-red">
              <ErrorMessage name="address"></ErrorMessage>
            </p>
          </label>

          {/* Website Form */}
          <label className="relative block">
            <p className="text-text-lighter text-[18px] font-semibold mt-4 mb-4">
              Website
            </p>
            <Field
              name="website"
              placeholder="Add Shul Website"
              className={twMerge(
                "text-sm font-normal border placeholder:text-text-softGary text-text border-text-softGary w-full p-3 rounded-[20px]",
                errors.website && touched.website && "border-red text-red"
              )}
            />
            <p className="absolute text-xs transition-all duration-200 -bottom-5 left-2 text-red">
              <ErrorMessage name="website"></ErrorMessage>
            </p>
          </label>
          <div className="mt-12 ">
            <button className="flex items-center justify-center w-full gap-2 p-2 text-sm border rounded-full text-text-lighter border-light-100">
              <Icon name="googleIcon" />
              <span>Import From Google</span>
            </button>
            <button
              type="submit"
              className="w-full p-2 mt-4 text-white transition-all duration-200 rounded-full bg-blue disabled:bg-blue/50"
              disabled={
                errors.name ||
                errors.address ||
                errors.website ||
                errors.imgCity
              }
            >
              Done
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
