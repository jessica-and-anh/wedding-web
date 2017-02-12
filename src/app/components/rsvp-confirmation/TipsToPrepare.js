import React, { PropTypes } from 'react';
import cx from 'classnames';
import '../../../stylesheets/components/rsvp-confirmation.css';
import fridayImage from '../../../images/rsvp/friday.png';

const TIP_SQUARES = [
  [
    {
      header: 'Here are some tips to prepare in the meantime',
      isRausch: true,
      headerOnly: true,
    },
    {
      header: 'Add our wedding to your calendar',
      linkText: 'Add to calendar',
      url: 'todo',
    },
    {
      header: 'Read about our venue and lodging',
      linkText: 'Learn more',
      url: 'http://chaletviewlodge.com/',
    },
  ],
  [

    {
      header: 'Plan what to bring for the weekend',
      linkText: 'Learn',
      url: 'todo',
    },
    {
      header: 'Visit our registry?!? TODO change this!',
      linkText: 'Learn more',
      url: 'http://chaletviewlodge.com/',
    },
    {
      header: 'Another todo placeholder',
      isRausch: true,
      headerOnly: true,
    },
  ],
];


function TipToPrepareSquare({ icon, headerOnly, header, linkText, url, isRausch }) {
  if (headerOnly) {
    return (
      <div className={cx('tips-to-prepare-square', { 'rausch-background': isRausch })}>
        <h1 className="space-top-2 space-2">{header}</h1>
      </div>
    );
  }
  return (
    <div className="tips-to-prepare-square">
      {/*icon*/}<img src={fridayImage} className="rsvp-day" alt="testing" />
      <h2 className="space-top-3 space-5">{header}</h2>
      {url && <a className="styled-link" href={url} target="_blank">{linkText}</a>}
    </div>
  );
}

TipToPrepareSquare.propTypes = {
  icon: PropTypes.string,
  headerOnly: PropTypes.bool,
  header: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  url: PropTypes.string,
  isRausch: PropTypes.bool,
};

TipToPrepareSquare.defaultProps = {
  headerOnly: false,
  linkText: null,
  url: null,
  isRausch: false,
};

export default function TipsToPrepare() {
  return (
    <div className="max-width">
      {TIP_SQUARES.map((row, rowIndex) => {
        return (
          <div className="flex flex-space-between space-3" key={rowIndex}>
            {row.map((squareProps) => {
              return <TipToPrepareSquare key={squareProps.header} {...squareProps} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
