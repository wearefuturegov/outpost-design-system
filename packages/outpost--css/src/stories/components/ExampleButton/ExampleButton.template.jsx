import React from 'react'
import clsx from 'clsx'

export const ExampleButtonTemplate = ({
    label,
    variant,
    disabled,
    size,
    fullWidth,
    selected,
  }) => (
    <>
      <button
        disabled={disabled}
        className={clsx(
          'btn',
          variant && `${variant}`,
          size && `${size}`,
          fullWidth && 'example-button--block',
        )}
        aria-selected={selected}
      >
        <span>{label}</span>
      </button>
    </>
  )