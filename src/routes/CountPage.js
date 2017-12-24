import React , { Component, PropTypes } from 'react';
import { connect } from 'dva';

// import Count from '../components/Count';

import styles from './CountPage.less';


function CountPage({count, dispatch}) {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
}

CountPage.propTypes = {
	count: PropTypes.object,
};

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(CountPage);
