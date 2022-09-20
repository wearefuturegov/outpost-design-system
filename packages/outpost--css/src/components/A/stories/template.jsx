import React from 'react'
import clsx from 'clsx'

export const Template = ({
    link,
    linkText
  }) => (
    <>
      <a className={clsx(
          'a'
        )} href={link}>
        {linkText}
      </a>
    </>
  )