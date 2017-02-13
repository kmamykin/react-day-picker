import React, { PropTypes } from 'react';

export default function Navbar({
  theme,
  showPreviousButton,
  showNextButton,
  onPreviousClick,
  onNextClick,
  dir,
}) {
  const previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  const nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  const previousButton = showPreviousButton &&
    <span
      role="button"
      key="previous"
      className={ theme.navbarPrev }
      onClick={ () => previousClickHandler() }
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      key="right"
      className={ theme.navbarNext }
      onClick={ () => nextClickHandler() }
    />;

  return (
    <div className={ theme.navbar }>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

export const NavbarPropTypes = {
  theme: PropTypes.object,
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  theme: {},
  dir: 'ltr',
  showPreviousButton: true,
  showNextButton: true,
};
