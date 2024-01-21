import { Button, ButtonProps } from 'primereact/button'

interface XyButtonProps extends ButtonProps {
   label: string
   onClick?: (e: any) => void
   text?: boolean
   outlined?: boolean
   type?: 'button' | 'submit' | 'reset' | undefined
}

export const XyButton = ({
   label,
   onClick,
   text,
   outlined,
   icon
}: XyButtonProps) => {
   return (
      <Button
         label={label}
         onClick={onClick}
         text={text}
         outlined={outlined}
         icon={icon}
         type="button"
      />
   )
}
