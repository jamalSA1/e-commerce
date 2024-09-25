'use client'
import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

interface CheckboxProps {
  label: string
  value: string
  isSelected: boolean
  className?: string
  onClickHandler: (value: string) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, value, isSelected, className, onClickHandler }) => {
  const [isChecked, setIsChecked] = useState(isSelected)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onClickHandler(value)
  }

  return (
    <label className={!isChecked ? classes.checkboxWrapper : classes.selected}>
      <button
        onClick={() => {
          setIsChecked(!isChecked); // Toggle the checkbox state
          onClickHandler(value); // Call the click handler
        }}
        className={ `${classes.checkbox} ${className}` }>
        {label}
      </button>
      {/* <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`${classes.checkbox} ${className}`}
      /> */}

    </label>
  )
}