import React, { PropTypes } from 'react';
import TentativeRoomAssignment from './tentative-room-assignment.js';

function LodgingDirections({ tier, guestsAttending }) {
  if (!guestsAttending) {
    return null;
  }

  let details;
  if (tier <= 1) {
    details = (
      <p>
        As part of the wedding rehearsal group, you have first picks for lodging.
        Plan to arrive by Friday afternoon for rehearsal. Afterwards, we will provide dinner for
        you (exclusive to wedding rehearsal group).
      </p>
    );
  } else if (tier >= 2) {
    details = (
      <p>
        On-site acommodations are limited so only reserve what your party needs. There is not enough
        room for all guests to be able to stay at the venue’s lodging. Please book soon as it is a
        first come, first serve basis and be mindful of other families when choosing your room, thanks!
      </p>
    );
  }

  return (
    <div className="space-2">
      {details}
      <p className="space-top-2 text-center padding-left-4 padding-right-4">
        <a href="http://chaletviewlodge.com/accommodations/" className="styled-link" target="_blank">
          View on-site lodging options
        </a>
      </p>
    </div>
  );
}

LodgingDirections.propTypes = {
  guestsAttending: PropTypes.array.isRequired,
  tier: PropTypes.number.isRequired,
};

export default function LodgingDetails({
  guestsAttending,
  guestsNotAttending,
  lodging,
  requestedLodgingDays,
  userGroup,
}) {
  const { tier, id } = userGroup;
  const { room_number: roomNumber } = lodging;
  const areGuestsAttending = guestsAttending.length > 0;

  // Guests are not coming and we weren't expecting them to
  if (roomNumber == null && (!areGuestsAttending || requestedLodgingDays.length === 0)) {
    return null;
  }

  return (
    <div className="centering-container">
      <h2 className="text-center space-2">CHALET VIEW LODGE ROOM DETAILS</h2>
      {guestsAttending.length > 0 &&
        <LodgingDirections
          guestsAttending={guestsAttending}
          tier={tier}
        />
      }
      <TentativeRoomAssignment
        lodging={lodging}
        requestedLodgingDays={requestedLodgingDays}
        guestsAttending={guestsAttending}
        guestsNotAttending={guestsNotAttending}
        userGroupId={id}
        tier={tier}
      />
    </div>
  );
}

LodgingDetails.propTypes = {
  guestsAttending: PropTypes.array.isRequired,
  guestsNotAttending: PropTypes.array.isRequired,
  lodging: PropTypes.object.isRequired,
  requestedLodgingDays: PropTypes.array.isRequired,
  userGroup: PropTypes.object.isRequired,
};
