import CloseButton from "@components/CloseButton";
import { Field, Form, Formik } from "formik";

export default function SortByMenu({ handlerActiveMenu, handlerSortBy }) {
  return (
    <Formik
      initialValues={{ sortRaido: "NewToOld" }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      {({ values }) => (
        <Form onChange={handlerSortBy(values.sortRaido)}>
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
          </div>
        </Form>
      )}
    </Formik>
  );
}
