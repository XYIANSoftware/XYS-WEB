import { FieldErrors } from 'react-hook-form'

export const FormHelpers = () => {
  const getFormErrorMessage = (name: string, errors: FieldErrors<any>) => {
    return errors[name] ? (
      <small className="p-error">{errors[name]?.message?.toString()}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    )
  }
  return { getFormErrorMessage }
}
