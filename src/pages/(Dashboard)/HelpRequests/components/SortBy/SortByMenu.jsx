import CloseButton from "@components/CloseButton";
import { Field, Form, Formik } from "formik";
import { useRef } from "react";

export default function SortByMenu({
  handlerActiveMenu,
  handlerSortBy,
  handlerStatus,
}) {
  const newToOld = useRef(false);
  const oldToNew = useRef(false);

  function handelSortView(e, valueCheckbox, setFieldValue) {
    const type = e.target.value;
    // disable all checkbox
    switch (valueCheckbox) {
      case "NewToOld": {
        newToOld.current.checked = false;
        break;
      }
      case "OldToNew": {
        oldToNew.current.checked = false;
        break;
      }
    }
    // If Value equal to last Value set empty Value
    if (type == valueCheckbox) {
      setFieldValue("sort", "");
      handlerSortBy("");
      return;
    }

    // Checkbox checked
    switch (type) {
      case "NewToOld": {
        newToOld.current.checked = true;
        break;
      }
      case "OldToNew": {
        oldToNew.current.checked = true;
        break;
      }
    }
    // Set new Value
    setFieldValue("sort", type);
    handlerSortBy(type);
  }

  return (
    <Formik
      initialValues={{ sort: "", status: "" }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form
          onInput={() => {
            if (values.status?.length == 2) handlerStatus("Both");
            if (values.status && values.status[0])
              handlerStatus(values.status[0]);
            if (!values.status[0]) handlerStatus("");
          }}
        >
          <div className="shadow-boo-1 pt-[29px] px-[17px] w-[200px] rounded-[20px] h-[229px] flex flex-col gap-[27px] relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Sort By:</span>
              <CloseButton
                closeFn={() => {
                  handlerActiveMenu();
                }}
              />
            </div>
            <div className="flex flex-col gap-3 mt-6 text-xs text-text-lighter">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  name="sort"
                  value="NewToOld"
                  ref={newToOld}
                  onChange={(e) =>
                    handelSortView(e, values.sort, setFieldValue)
                  }
                />
                <span>New To Old</span>
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  name="sort"
                  value="OldToNew"
                  ref={oldToNew}
                  onChange={(e) =>
                    handelSortView(e, values.sort, setFieldValue)
                  }
                />
                <span>Old To New</span>
              </label>
              <label className="flex gap-2">
                <Field type="checkbox" name="status" value="Active" />
                <span>Active Requests</span>
              </label>
              <label className="flex gap-2">
                <Field type="checkbox" name="status" value="Expired" />
                <span>Expired Requests</span>
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
