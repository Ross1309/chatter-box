import React from 'react';
import PropTypes from 'prop-types';

import { Details, DetailRow, DetailItem, DetailLabel } from './CustomerDetails.styles';

export const CustomerDetails = ({ user }) => {
  return (
    <Details>
      <DetailRow>
        <DetailItem>
          <DetailLabel>First Name</DetailLabel>
          {user.firstName}
        </DetailItem>
        <DetailItem>
          <DetailLabel>Last Name</DetailLabel>
          {user.lastName}
        </DetailItem>
      </DetailRow>
      <DetailRow>
        <DetailItem>
          <DetailLabel>Phone Number</DetailLabel>
          {user.phoneNumber}
        </DetailItem>
        <DetailItem>
          <DetailLabel>Email</DetailLabel>
          {user.email}
        </DetailItem>
      </DetailRow>
      <DetailRow>
        <DetailItem>
          <DetailLabel>Address</DetailLabel>
          {user.address}
        </DetailItem>
      </DetailRow>
    </Details>
  );
};

CustomerDetails.propTypes = {
  user: PropTypes.object.isRequired,
};
