import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true
  });
  middleware.push(logger)
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
