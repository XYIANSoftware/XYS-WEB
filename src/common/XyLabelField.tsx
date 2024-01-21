import { ReactNode } from 'react'
import { LabelFieldSize } from '@/helpers/types'
import { Helpers } from '@/helpers'
export interface XyLabelFieldProps {
  field: ReactNode
  label?: string
  labelSize?: LabelFieldSize
  fieldSize?: LabelFieldSize
  vertical?: boolean
}

export const XyLabelField = ({
  label,
  labelSize,
  field,
  fieldSize,
  vertical
}: XyLabelFieldProps) => {
  const { getSize } = Helpers()

  return label ? (
    <div
      className={`flex gap-2 align-items-center ${
        vertical === true ? 'flex-column' : 'flex-row'
      } `}
    >
      <div style={{ width: getSize(labelSize) }}>{label}:</div>
      <div style={{ width: getSize(fieldSize) }}>{field}</div>
    </div>
  ) : (
    <div style={{ width: getSize(fieldSize) }}>{field}</div>
  )
}
