import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import {
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions
} from 'react-hook-form'
import { FormHelpers } from '../FormHelpers'
import { XyLabelField } from '..'
interface XyInputTextProps {
  control: any
  name: string
  errors: FieldErrors<any>
  label?: string
  vertical?: boolean
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
  rules,
  label,
  vertical
}: XyInputTextProps) => {
  const { getFormErrorMessage } = FormHelpers()
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          {/* <label
            htmlFor={field.name}
            className={classNames({ 'p-error': errors.value })}
          ></label>
          <label htmlFor={field.name}>Name - Surname</label>
          <span className="p-float-label">
            <InputText
              id={field.name}
              value={field.value}
              className={classNames({ 'p-invalid': fieldState.error })}
              onChange={e => field.onChange(e.target.value)}
            />
          </span> */}
          <XyLabelField
            label={label}
            field={
              <InputText
                id={field.name}
                value={field.value}
                className={classNames({ 'p-invalid': fieldState.error })}
                onChange={e => field.onChange(e.target.value)}
              />
            }
            vertical={vertical}
          />
          {getFormErrorMessage(field.name, errors)}
        </>
      )}
    />
  )
}
