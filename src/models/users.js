import { hashHistory } from 'dva/router';


import { query } from '../services/users';


export default {
  namespace: 'users',

  state: {
    list: [],
    total: null, 
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'querySuccess',
            payload: {}
          });
        }
      });
    },
  },
    effects: {
        // 其中 call 和 put 是 dva 提供的方便操作 effects 的函数，简单理解 call 是调用执行一个函数而 put 则是相当于 dispatch 执行一个 action，而 select 则可以用来访问其它 model
        *query({ payload }, { select, call, put }){
          yield put({ type: 'showLoading' });
          const { data } = yield call(query);
          if (data) {
            yield put({
              type: 'querySuccess',
              payload: {
                list: data.data,
                total: data.page.total,
                current: data.page.current
              }
            });
          }
        },
        *create(){},
        *'delete'(){},
        *update(){},
    },
    reducers: {
        showLoading(state, action){
          return { ...state, loading: true };
        }, // 控制加载状态的 reducer
        showModal(){}, // 控制 Modal 显示状态的 reducer
        hideModal(){},
        querySuccess(state, action){
            // const mock = {
            //     total: 3,
            //     current: 1,
            //     loading: false,
            //     list: [
            //       {
            //         id: 1,
            //         name: '张三',
            //         age: 23,
            //         address: '成都',
            //       },
            //       {
            //         id: 2,
            //         name: '李四',
            //         age: 24,
            //         address: '杭州',
            //       },
            //       {
            //         id: 3,
            //         name: '王五',
            //         age: 25,
            //         address: '上海',
            //       },
            //     ],

            //   };
            //   return {...state, ...mock, loading: false};
            return {...state, ...action.payload, loading: false};
        },
        createSuccess(){},
        deleteSuccess(){},
        updateSuccess(){},
    }
}