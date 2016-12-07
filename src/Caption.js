import React, { PropTypes } from 'react';
import DayPickerPropTypes from './PropTypes';

export default function Caption({ date, months, locale, localeUtils, onClick, classes = {} }) {
  return (
    <div className={ classes.caption } onClick={ onClick } role="heading">
      { months ?
        `${months[date.getMonth()]} ${date.getFullYear()}` :
        localeUtils.formatMonthTitle(date, locale)
      }
    </div>
  );
}

Caption.propTypes = {
  date: PropTypes.instanceOf(Date),
  months: React.PropTypes.arrayOf(React.PropTypes.string),
  locale: PropTypes.string,
  localeUtils: DayPickerPropTypes.localeUtils,
  onClick: PropTypes.func,
  classes: PropTypes.object,
};
