import React, { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import SearchBox from "@components/SearchBox";

// handlerActiveMenu might be used for event CLOSE modal
export default function SortByAppPayments({
  handlerActiveMenu,
  handlerSortBy,
}) {
  const [searchArea, setSearchArea] = useState("");

  useEffect(() => {
    setSearchArea("");
  }, []);

  function handlerChange(value) {
    setSearchArea(value);
  }
  function handlerSubmit() {
    console.log(searchArea);
  }

  return (
    <Formik
      initialValues={{ sortRaido: "NewToOld" }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      }}>
      {({ values }) => (
        <Form onSubmit={() => handlerSortBy(values.sortRaido)}>
          <div className="shadow-boo-1 pt-6 px-[17px] w-[315px] rounded-[20px] pb-4 flex flex-col gap-1 relative z-10">
            <div className="flex flex-row items-center justify-between">
              <SearchBox
                searchBoxHandler={{
                  searchInput: searchArea,
                  handlerChange: handlerChange,
                  handlerSubmit: handlerSubmit,
                  placeHolder: "Search By Area",
                  className: "w-[214px] pl-4",
                }}
              />
            </div>
            <div className="flex flex-col gap-3 mt-6 text-xs text-text-lighter">
              <label htmlFor={`NewToOld`} className="flex gap-2">
                <Field
                  value="NewToOld"
                  name="sortRaido"
                  type="radio"
                  className="checkBox"
                  id={`NewToOld`}
                />
                <span>New To Old</span>
              </label>
              <label htmlFor={`OldToNew`} className="flex gap-2">
                <Field
                  value="OldToNew"
                  name="sortRaido"
                  type="radio"
                  className="checkBox"
                  id={`OldToNew`}
                />
                <span>Old To New</span>
              </label>
              <label htmlFor={`Alphabetical`} className="flex gap-2">
                <Field
                  value="Alphabetical"
                  name="sortRaido"
                  type="radio"
                  className="checkBox"
                  id={`Alphabetical`}
                />
                <span>Alphabetical</span>
              </label>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-[120px] p-2 mt-4 text-white  duration-200 rounded-full bg-blue disabled:bg-blue/50">
                Apply
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
