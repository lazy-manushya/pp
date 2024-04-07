import { FormikValues } from "formik/dist/types";

import { FormProvider } from "./Form.context";
import { IFormProps } from "./Form.types";

function Form<T extends FormikValues>(props: IFormProps<T>) {
  return <FormProvider<T> {...props} />;
}

export default Form;
