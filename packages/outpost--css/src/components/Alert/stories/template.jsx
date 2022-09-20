import React from 'react'
import clsx from 'clsx'

export const Template = ({
    children,
    link,
    linkText
  }) => (
    <>
      <div className={clsx(
          '.'
        )}>
        {children}
        {link && <a className="." to={link}>{linkText}</a>}
      </div>
    </>
  )