import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const logger = createLogger({
  collapsed: true
});

export default createStore(
  rootReducer,
  applyMiddleware(logger)
);
