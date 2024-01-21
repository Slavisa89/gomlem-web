import ButtonInsertPreMadeMessage from "@components/SendMessage/ButtonInsertPreMadeMessage";
import { ErrorMessage, Form, Formik } from "formik";
import { twMerge } from "tailwind-merge";
import useBlock from "../../../hooks/useBlock";
import useUnBlock from "../../../hooks/useUnBlock";
import Icon from "@components/Icon";

export default function ModalBlockUser({ handlerActiveModal, isBlock }) {
  const { mutateBlockCustomer, blockPending } = useBlock();
  const { mutateUnblockCustomer, unBlockPending } = useUnBlock();
  return (
    <div className="pl-10 pr-[34px] w-[453px] pt-[42px] pb-16 bg-white rounded-b-[20px] flex flex-col gap-[29px]">
      <ButtonInsertPreMadeMessage className="justify-between" />
      <div>
        <p className="mb-4 text-sm font-semibold">
          {isBlock == "true"
            ? "custom Message for unBlocking"
            : "Or Type Custom Message Letting Them Know Why They’re Being Blocked"}
        </p>
        <Formik
          initialValues={{ body: "" }}
          onSubmit={(actions) => {
            isBlock == "false"
              ? mutateBlockCustomer().then(() => {
                  handlerActiveModal(false);
                })
              : mutateUnblockCustomer().then(() => {
                  handlerActiveModal(false);
                });

            actions.setSubmitting(false);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              <div className="h-full grow">
                <textarea
                  className={twMerge(
                    "h-[200px] border border-light-100 focus-within:outline-none py-[28px] px-[18px] rounded-[20px] mb-[29px]",
                    errors.body && "border border-red rounded-lg"
                  )}
                  name="body"
                  value={values.body}
                  onChange={handleChange}
                  placeholder="Massage..."
                  style={{ width: "-webkit-fill-available", resize: "none" }}
                ></textarea>
                <ErrorMessage name="body"></ErrorMessage>
              </div>
              <button className="items-center justify-center w-full text-sm _btn-error _btn-small _btn-error-solid rounded-2xl">
                {isBlock == "true" ? (
                  <span>Send Message & UnBlock User</span>
                ) : (
                  <span>Send Message & Block User</span>
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {unBlockPending || blockPending ? (
        <div className="absolute rounded-[20px] top-0 left-0 flex items-center justify-center w-full h-full bg-slate-300/50">
          <Icon name="loadingBlue" className="w-10 h-10" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
