import React from 'react'
import PropTypes from 'prop-types'

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={'btn btn-primary ' + classes}
      >
        {label}
        {icon && (
          <span className='material-symbols-rounded ml-2' aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    )
  } else {
    return (
      <button className={'btn btn-primary ' + classes}>
        {label}
        {icon && (
          <span className='material-symbols-rounded ml-2' aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

const ButtonOutLine = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={'btn btn-outline ' + classes}
      >
        {label}
        {icon && (
          <span className='material-symbols-rounded ml-2' aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    )
  } else {
    return (
      <button className={'btn btn-outline ' + classes}>
        {label}
        {icon && (
          <span className='material-symbols-rounded ml-2' aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
}

ButtonOutLine.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
}

// ✅ Correct named export
export { ButtonPrimary, ButtonOutLine }
