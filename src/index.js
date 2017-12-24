import dva from 'dva';
import './index.css';
// import models from './models';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/count'));
// models.forEach((m) => {
//   app.model(m);
// });

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
