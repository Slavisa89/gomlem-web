import CloseButton from "@components/CloseButton";
import { Field, Form, Formik } from "formik";

export default function SortByMenu({ handlerActiveMenu, handlerSortBy }) {
  return (
    <Formik
      initialValues={{ sortRaido: "MostGomlersToLeast" }}
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
              <label htmlFor={`MostGomlersToLeast`} className="flex gap-2">
                <Field
                  value="MostGomlersToLeast"
                  name="sortRaido"
                  type="radio"
                  className="rounded-md radio radio-xs radio-success"
                  id={`MostGomlersToLeast`}
                />
                <span>Most Gomlers to least</span>
              </label>
              <label htmlFor={`LeastGomlersToMost`} className="flex gap-2">
                <Field
                  value="LeastGomlersToMost"
                  name="sortRaido"
                  type="radio"
                  className="rounded-md radio radio-xs radio-success"
                  id={`LeastGomlersToMost`}
                />
                <span>Least Gomlers to most</span>
              </label>

            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
