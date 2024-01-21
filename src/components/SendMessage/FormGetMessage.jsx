import { twMerge } from "tailwind-merge";
import Icon from "@components/Icon";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sendEmail } from "@services/api/admin";
import { ToastError } from "@components/Alert";
import * as Yup from "yup";

export default function FormGetMessage({ isPending, userId }) {
  const sendEmailValidation = Yup.object().shape({
    subject: Yup.string()
      .min(5, "Too Short!")
      .max(32, "Too Long!")
      .required("Required"),
    body: Yup.string()
      .min(10, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{ subject: "", body: "" }}
      onSubmit={async (values, actions) => {
        try {
          console.log({ ...values, userId });
          const { data } = await sendEmail({ ...values, userId });
          console.log(data);
        } catch (error) {
          ToastError.fire({ icon: "error", title: error.message });
        }
        actions.setSubmitting(false);
      }}
      validationSchema={sendEmailValidation}
    >
      {({ errors,touched, values, handleChange }) => (
        <Form>
          <div>
            <div
              className={twMerge(
                "border-b border-light-100 flex items-center text-sm justify-between pl-[26px] gap-4",
                errors.subject && touched.subject && "border-red"
              )}
            >
              <span className="font-semibold">Subject:</span>
              <Field name="subject" type="text" className="py-3 grow" />
            </div>
            <span className="pt-2 pl-6 text-sm text-red">
              <ErrorMessage name="subject"></ErrorMessage>
            </span>
            <div className="h-full grow">
              <textarea
                className={twMerge(
                  "h-[210px] focus-within:outline-none my-3 pl-[26px] pr-1",errors.body && "border border-red rounded-lg"
                )}
                name="body"
                value={values.body}
                onChange={handleChange}
                placeholder="Massage..."
                style={{ width: "-webkit-fill-available", resize: "none" }}
              ></textarea>
              <ErrorMessage name="body"></ErrorMessage>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <Icon name="link" />
                <label htmlFor="inputPicture">
                  <Icon name="pic" />
                  <input type="file" id="inputPicture" className="hidden" />
                </label>
                <label htmlFor="inputAttach">
                  <input type="file" id="inputAttach" className="hidden" />
                  <Icon name="attach" />
                </label>
              </div>

              <button
                className="_btn _btn-blue"
                disabled={isPending || userId?.length == 0}
              >
                Send
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
