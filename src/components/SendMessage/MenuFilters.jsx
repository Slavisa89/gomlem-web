import { Formik, Form, Field } from "formik";
import { getFormattedDate } from "@/script/script";
import Icon from "@components/Icon";
import { useRef } from "react";

export default function MenuFilters({
  ModalName,
  initFilter,
  handlerParam,
  isDisable,
}) {
  const joinADay = useRef(false);
  const joinAWeek = useRef(false);
  const joinAMonth = useRef(false);

  function handlerCheckBox(e, valueCheckbox, setFieldValue) {
    const type = e.target.value;
    // disable all checkbox
    switch (valueCheckbox) {
      case getFormattedDate(1): {
        joinADay.current.checked = false;
        break;
      }
      case getFormattedDate(7): {
        joinAWeek.current.checked = false;
        break;
      }
      case getFormattedDate(30): {
        joinAMonth.current.checked = false;
        break;
      }
    }
    // If Value equal to last Value set empty Value
    if (type == valueCheckbox) {
      setFieldValue("RegisteredFrom", "");
      return;
    }

    // Checkbox checked
    switch (type) {
      case getFormattedDate(1): {
        joinADay.current.checked = true;
        break;
      }
      case getFormattedDate(7): {
        joinAWeek.current.checked = true;
        break;
      }
      case getFormattedDate(30): {
        joinAMonth.current.checked = true;
        break;
      }
    }
    // Set new Value
    setFieldValue("RegisteredFrom", type);
  }

  function clearParam(param) {
    const cleanedParam = {};
    for (const key in param) {
      if (param[key]) {
        cleanedParam[key] = param[key];
      }
    }
    return cleanedParam;
  }
  return (
    <Formik
      initialValues={initFilter}
      onSubmit={async (values, actions) => {
        setTimeout(() => {
          handlerParam(clearParam(values));
        }, 100);
        actions.setSubmitting(false);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="shadow-boo-1 pt-5 pb-[9px] px-[9px] w-[228px] rounded-[20px] h-[368px] flex flex-col justify-between relative z-10">
            <div>
              <label
                htmlFor="searchMenuFilters"
                className="flex items-center gap-3 px-4 py-3 rounded-full bg-light-100"
              >
                <Icon name="search" className="w-3 h-3" />
                <Field
                  disabled={isDisable}
                  type="search"
                  name="Country"
                  placeholder="Search area to send to"
                  className="bg-transparent text-[10px] placeholder:text-gary w-32"
                  id="searchMenuFilters"
                />
                {values?.Country && (
                  <div
                    className="absolute p-1 rounded-full w-7 h-7 bg-text-softGary right-4"
                    onClick={() => {
                      values.Country = "";
                    }}
                  >
                    <Icon name="close" className="" />
                  </div>
                )}
              </label>

              <div className="flex flex-col gap-3 mt-6 text-xs text-text-lighter">
                <label className="flex gap-2">
                  <input
                    disabled={isDisable}
                    type="checkbox"
                    name="RegisteredFrom"
                    value={getFormattedDate(1)}
                    ref={joinADay}
                    onChange={(e) =>
                      handlerCheckBox(e, values.RegisteredFrom, setFieldValue)
                    }
                  />
                  <span>Signed up today</span>
                </label>
                <label className="flex gap-2">
                  <input
                    disabled={isDisable}
                    type="checkbox"
                    name="RegisteredFrom"
                    value={getFormattedDate(7)}
                    ref={joinAWeek}
                    onChange={(e) =>
                      handlerCheckBox(e, values.RegisteredFrom, setFieldValue)
                    }
                  />
                  <span>Signed up week</span>
                </label>
                <label className="flex gap-2">
                  <input
                    disabled={isDisable}
                    type="checkbox"
                    name="RegisteredFrom"
                    value={getFormattedDate(30)}
                    ref={joinAMonth}
                    onChange={(e) =>
                      handlerCheckBox(e, values.RegisteredFrom, setFieldValue)
                    }
                  />
                  <span>Signed up month</span>
                </label>
                <hr className="my-2 text-gray" />
                <label htmlFor={`${ModalName}-profile`} className="flex gap-2">
                  <Field
                    disabled={isDisable}
                    type="checkbox"
                    name="WithHelperProfile"
                    className="myinput"
                    id={`${ModalName}-profile`}
                  />
                  <span>Everyone with a helper profile</span>
                </label>
                <label htmlFor={`${ModalName}-trip`} className="flex gap-2">
                  <Field
                    disabled={isDisable}
                    type="checkbox"
                    name="WithPlannedTrip"
                    className="myinput"
                    id={`${ModalName}-trip`}
                  />
                  <span>Everyone with a planned trip</span>
                </label>
              </div>
            </div>
            <div className="self-end ">
              <button
                type="submit"
                disabled={isDisable}
                className="_btn _btn-blue px-[42px] py-[10px] flex gap-2 text-white text-sm rounded-[15px] duration-200 transition-all "
              >
                <span>{isDisable ? "Loading..." : "Apply"}</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
