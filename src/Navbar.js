import React, { PropTypes } from 'react';

export default function Navbar({
  classes,
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
      className={ classes.navbarPrev }
      onClick={ () => previousClickHandler() }
    />;

  const nextButton = showNextButton &&
    <span
      role="button"
      key="right"
      className={ classes.navbarNext }
      onClick={ () => nextClickHandler() }
    />;

  return (
    <div className={ classes.navbar }>
      {dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]}
    </div>
  );
}

export const NavbarPropTypes = {
  classes: PropTypes.object,
  showPreviousButton: PropTypes.bool,
  showNextButton: PropTypes.bool,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  dir: PropTypes.string,
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  classes: {},
  dir: 'ltr',
  showPreviousButton: true,
  showNextButton: true,
};
