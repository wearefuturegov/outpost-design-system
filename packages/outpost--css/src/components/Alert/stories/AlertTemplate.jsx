import React from 'react'
import clsx from 'clsx'

export const AlertTemplate = ({
    children,
    link,
    linkText
  }) => (
    <>
      <div className={clsx(
          'styledAlert'
        )}>
        {children}
        {link && <a className="styledLink" to={link}>{linkText}</a>}
      </div>
    </>
  )