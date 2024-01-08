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
    control
    //formState: { errors },
    //handleSubmit
  } = useForm()
  return (
    <Panel header="Contact Form">
      <form>
        <div className="grid">
          <div>
            <p>Enter First Name:</p>
            {/* <XyInputText control={control} errors={errors} name="firstName" /> */}
          </div>
          <div>
            <p>Enter Last Name:</p>
            {/* <XyInputText control={control} errors={errors} name="firstName" /> */}
          </div>
        </div>
      </form>
    </Panel>
  )
}
