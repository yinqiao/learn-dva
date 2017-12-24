# learn-dva

参考文档 <https://github.com/dvajs/dva-docs/tree/master/v1/zh-cn/tutorial>


## 定义组件


// 1. 传统写法
const App = React.createClass({});

// 2. es6 的写法
class App extends React.Component({});

// 3. stateless 的写法（我们推荐的写法）
const App = (props) => ({});