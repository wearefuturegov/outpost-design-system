import React from 'react'
import clsx from 'clsx'

export const Template = ({
    children,
    solid,
    link,
    primary,
    element
  }) => {
    const Element = (element === 'link') ? `a` : `div`;
    return (
    <>
      <Element className={clsx(
          'btn',
          solid && 'btn--solid',
          link && 'btn--link',
          primary && 'btn--primary',
        )}>
        {children}
      </Element>
    </>
  )
}