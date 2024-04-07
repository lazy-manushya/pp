import { FormikErrors, FormikTouched } from "formik";

export interface IFormContext<T> {
  values: T;
  errors: FormikErrors<T>;
  touched: FormikTouched<T>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<any>;
  submitForm: () => void;
}

export type IFormProps<T = { [key: string | number]: any }> = {
  initialValues?: T;
  children?:
    | React.ReactNode
    | ((data: { context: IFormContext<T> }) => React.ReactNode);
  yupValidationSchema?: any;
  onSubmit?: (values: T) => void;
};
