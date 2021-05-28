import React from 'react';
import { Modals } from '../../component';

const TestModal = ({ data }) => {
  return (
    <Modals size="small" header="Test Modal">
      <div>The data is:{data}</div>
    </Modals>
  );
};

export default TestModal;
