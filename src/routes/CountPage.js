import React from 'react';
import { connect } from 'dva';

import Count from '../components/Count'

function CountPage() {
  return (
    <div>
      this is CountPage
      <Count/>
    </div>
  );
}

CountPage.propTypes = {
};

export default connect()(CountPage);
