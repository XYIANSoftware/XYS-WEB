import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import {
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions
} from 'react-hook-form'
import { FormHelpers } from '../FormHelpers'
interface XyInputTextProps {
  control: any
  name: string
  errors: FieldErrors<any>
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined
}

export const XyInputText = ({
  control,
  name,
  errors,
  rules
}: XyInputTextProps) => {
  const { getFormErrorMessage } = FormHelpers()
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <label
            htmlFor={field.name}
            className={classNames({ 'p-error': errors.value })}
          ></label>
          <span className="p-float-label">
            <InputText
              id={field.name}
              value={field.value}
              className={classNames({ 'p-invalid': fieldState.error })}
              onChange={e => field.onChange(e.target.value)}
            />
            <label htmlFor={field.name}>Name - Surname</label>
          </span>
          {getFormErrorMessage(field.name, errors)}
        </>
      )}
    />
  )
}
