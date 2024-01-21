'use client'
import { Panel } from 'primereact/panel'
import { XyInputText } from '@/common/Inputs/XyInputText'
import { useForm } from 'react-hook-form'
export interface ContactModel {
  firstName: string
  lastName: string
  phoneNumber: number
  email: string
  message: string
}
export const ContactMe = () => {
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm()
  return (
    <Panel header="Contact Form">
      <form>
        <div className="grid">
          <div>
            <XyInputText
              control={control}
              errors={errors}
              name="firstName"
              label="First Name"
            />
          </div>
          <div>
            <XyInputText control={control} errors={errors} name="firstName" />
          </div>
        </div>
      </form>
    </Panel>
  )
}
