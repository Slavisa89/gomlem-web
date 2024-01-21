import Icon from "@components/Icon";
import { Form, Formik, Field, ErrorMessage } from "formik";
import helpNumberValidation from "./validation";
import { twMerge } from "tailwind-merge";

export default function FormModalHelpNumber({ data }) {
  return (
    <Formik
      initialValues={{
        organizationName: data?.organizationName || "",
        number: data?.number || "",
      }}
      onSubmit={async (values, actions) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
      validationSchema={helpNumberValidation}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <label className="relative block">
            <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
              Organization Name
            </p>
            <Field
              name="organizationName"
              placeholder="Organization Name"
              className={twMerge(
                "text-sm font-normal border  placeholder:text-text-softGary text-text border-text-softGary w-full p-3 rounded-[20px]",
                errors.organizationName &&
                  touched.organizationName &&
                  "border-red text-red"
              )}
            />
            <p className="absolute text-xs transition-all duration-200 -bottom-5 left-2 text-red">
              <ErrorMessage name="organizationName"></ErrorMessage>
            </p>
          </label>

          <label className="relative block">
            <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
              Number
            </p>
            <Field
              name="number"
              placeholder="090223567321"
              className={twMerge(
                "text-sm font-normal border placeholder:text-text-softGary text-text border-text-softGary w-full p-3 rounded-[20px]",
                errors.number && touched.number && "border-red text-red"
              )}
            />
            <p className="absolute text-xs transition-all duration-200 -bottom-5 left-2 text-red">
              <ErrorMessage name="number"></ErrorMessage>
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
              disabled={errors.organizationName || errors.number}
            >
              Done
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
