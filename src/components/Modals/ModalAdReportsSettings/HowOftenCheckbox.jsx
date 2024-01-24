import { Field, Form, Formik } from "formik";

export default function HowOftenCheckbox({ handler }) {
  return (
    <Formik
      initialValues={{ howOftenCheckbox: [] }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      }}>
      {({ values }) => (
        <Form onChange={handler(values.howOftenCheckbox)}>
          <div className="flex flex-row gap-2 mt-6 text-xs text-text-lighter">
            <label className="flex gap-2">
              <Field
                value="EveryDay"
                name="howOftenCheckbox"
                type="checkbox"
                className="checkBox"
                id={`EveryDay`}
              />
              <span>Every day</span>
            </label>
            <label className="flex gap-2">
              <Field
                value="OnceAWeek"
                name="howOftenCheckbox"
                type="checkbox"
                className="checkBox"
                id={`OnceAWeek`}
              />
              <span>Once a week</span>
            </label>
            <label className="flex gap-2">
              <Field
                value="EndOfCampaign"
                name="howOftenCheckbox"
                type="checkbox"
                className="checkBox"
                id={`EndOfCampaign`}
              />
              <span>End of Campaign</span>
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
}
