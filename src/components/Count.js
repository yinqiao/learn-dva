
/*
 * 
 * 问题1： 不知道为什么，通过 routes/CountPage.js 引入 import Count from '../components/Count'; 时，
 * 点击添加按钮，显示 dispatch 未定义
 * 问题2： components 下 通常是否需要定义 xxx.less 文件？
 * 问题3： routes/CountPage.js 文件中 CountPage({count, dispatch}) 为什么如此传参，而
 * routes/Users.js 文件中 Users(location, dispatch, users) 这种方式传参
 * 问题4： CountPage.propTypes 如何定义
 * 问题5： mock 如何配置
 * */

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
