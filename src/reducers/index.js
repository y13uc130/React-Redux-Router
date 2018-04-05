import { combineReducers } from 'redux';
import {reducers as formReducers} from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducers //wired up redux form
});

export default rootReducer;