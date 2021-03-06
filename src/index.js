
import React from 'react';
import ReactDom from 'react';
import { createStore } from 'redux';
import { combineReducers } from './reducers/index';
import { books, recommendedBooks } from './reducers/manage_books';

const rootReducer = combineReducers(books, recommendedBooks);
