import React, { useReducer, useState } from "react";
import OtpInput from "react-otp-input";
import AnimBox2 from "@animation/AnimBox2";
import Icon from "@components/Icon";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { reducerLogin, ACTIONS, initialArg } from "./ReducerLogin";
import { twMerge } from "tailwind-merge";
import { sendMobile, sendOtp } from "./LogicLogin";
import { useNavigate } from "react-router-dom";
import { ToastError } from "@components/Alert";

export default function LoginFrom() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [state, dispatch] = useReducer(reducerLogin, initialArg);
  const loginErrorMessagesSchema = Yup.object().shape({
    mobile: Yup.number()
      .min(100000000, "Too Short!")
      .max(999999999999, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{ mobile: "" }}
      onSubmit={async (values, actions) => {
        let numberMobile = JSON.parse(values.mobile);
        if (numberMobile[0] !== "+") numberMobile = `+${numberMobile}`;

        if (state.step == "Send_Mobile") {
          dispatch({ type: ACTIONS.IS_LOADING });
          const res = await sendMobile(numberMobile);
          dispatch({ type: res.action });
          if (res.toast) ToastError.fire(res.toast);
        } else {
          dispatch({ type: ACTIONS.IS_LOADING });
          const res = await sendOtp(numberMobile, otp);
          if (res == "Verified") {
            navigate("/");
          } else {
            dispatch({ type: res.action });
            if (res.toast) ToastError.fire(res.toast);
          }
        }
        actions.setSubmitting(false);
      }}
      validationSchema={loginErrorMessagesSchema}
    >
      {({ errors }) => (
        <Form
          className={twMerge(
            "w-[425px] flex flex-col relative",
            state.activeOtp && "gap-4"
          )}
        >
          <Field
            type="number"
            name="mobile"
            placeholder="Enter Mobile"
            disabled={state.isDisableMobile}
            className={twMerge(
              "input transition-all duration-300 bg-light-200 pl-[26px] py-5 text-text w-full rounded-[20px] placeholder:text-text focus-within:outline-none focus-within:border-blue border border-transparent",
              errors.mobile && "!border-red"
            )}
          />
          <span className="pt-2 pl-2 text-sm text-red">
            <ErrorMessage name="mobile"></ErrorMessage>
          </span>
          <AnimBox2
            time={12}
            isOpen={state.activeOtp}
            className="flex flex-col gap-4"
          >
            <span className="pl-[14px]">Enter Code</span>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              disabled={state.isDisableOtp}
              renderSeparator={<span>-</span>}
              inputType="number"
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                fontSize: "16px",
              }}
              inputStyle={{ width: "44px" }}
              shouldAutoFocus={state.activeOtp}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="*"
                  className="p-4 transition-all duration-200 border border-transparent rounded-xl bg-light-100 focus-within:border-blue focus-within:scale-105"
                />
              )}
            />
          </AnimBox2>
          <button
            type="submit"
            className=" _btn _btn-blue text-white hover mt-11 h-11 rounded-[15px] hover:bg-blue/90 disabled:bg-blue/50 disabled:text-white"
            disabled={
              state.step == "Send_Mobile"
                ? state.isDisableBtn || errors.mobile
                : otp.length < 6 || state.isDisableBtn
            }
          >
            Login{" "}
            {state.isDisableBtn && <Icon name="loading" className="w-5 h-5" />}
          </button>
          <a
            className={twMerge(
              "bg-white absolute hidden top-3 right-4 w-8 h-8 p-2 rounded-xl",
              state.activeBack && "block"
            )}
            onClick={() => {
              dispatch({ type: ACTIONS.SEND_MOBILE });
              setOtp("");
            }}
          >
            <Icon name="arrow" />
          </a>
        </Form>
      )}
    </Formik>
  );
}
