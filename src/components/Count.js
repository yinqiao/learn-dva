import styles from './Count.less';

const Count = (count, dispatch) => {
	return (
		<div className={styles.normal}>
	      	<div className={styles.record}>Highest Record: {count.record}</div>
	      	<div className={styles.current}>{count.current}</div>
	      	<div className={styles.button}>
	        	<button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
	      	</div>
	    </div>
	)
};

Count.propTypes = {
};

export default Count;
