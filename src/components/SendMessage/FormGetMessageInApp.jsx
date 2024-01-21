import ButtonInsertPreMadeMessage from "./ButtonInsertPreMadeMessage";
import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";
import { Formik } from "formik";
import { Form } from "formik";
import * as Yup from "yup";

export default function FormGetMessageInApp({
  isPending,
  userId,
  opened = false,
}) {
  const sendEmailValidation = Yup.object().shape({
    message: Yup.string()
      .min(10, "Too Short!")
      .max(500, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={async (values, actions) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
      validationSchema={sendEmailValidation}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <div className="gorw">
            <div className="relative border rounded-[20px]">
              {opened ? null : (
                <ButtonInsertPreMadeMessage className="ml-auto mt-[18px] mr-[13px]" />
              )}
              <textarea
                className={twMerge(
                  "h-[210px] focus-within:outline-none my-3 pl-[19px] pr-1 text-sm text-text-lighter font-normal placeholder:text-text-lighter placeholder:font-normal"
                )}
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Type Here..."
                style={{ width: "-webkit-fill-available", resize: "none" }}
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
