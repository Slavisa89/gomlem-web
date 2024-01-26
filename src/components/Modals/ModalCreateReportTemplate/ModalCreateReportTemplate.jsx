import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function ModalCreateReportTemplate() {
  const sendEmailValidation = Yup.object().shape({
    message: Yup.string()
      .min(10, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
  });
  return (
    <div className="flex flex-col px-[33px] pt-[43px] gap-[18px] h-[547px] w-[643px]">
      <Formik
        initialValues={{ message: "", title: "" }}
        onSubmit={async (values, actions) => {
          alert(JSON.stringify(values));
          actions.setSubmitting(false);
        }}
        validationSchema={sendEmailValidation}
        className="mt-5"
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <div className="gorw">
              <Field
                type="text"
                name="title"
                onChange={handleChange}
                className="py-[14px] pl-[26px] border border-light-100 placeholder:font-semibold w-full rounded-[20px] mb-[22px]"
                placeholder="Add Report template Title"
              />
              <div className="relative border rounded-[20px]">
                <textarea
                  className={twMerge(
                    "h-[210px] focus-within:outline-none my-3 pl-[19px] pr-1 text-sm text-text-lighter font-normal placeholder:text-text-lighter placeholder:font-normal"
                  )}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Type Here..."
                  style={{
                    width: "-webkit-fill-available",
                    resize: "none",
                  }}
                ></textarea>
                <div className="flex gap-4 pl-[19px] pb-[19px]">
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
              </div>
              <div className="flex items-center justify-end mt-2">
                <button type="submit" className="_btn-blue">
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
