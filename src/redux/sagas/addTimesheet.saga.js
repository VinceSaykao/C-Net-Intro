import { put, takeEvery } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import axios from 'axios';

// saga function generator 
function* AddSaga(action) {
    console.log('action payload is add form', action.payload);

    try {
        yield axios.post('/api/timesheet', action.payload);
    } catch (error) {
        console.log('Error on addsaga post', error);
    }
    yield put({ type: 'FETCH_TIMESHEET' });
}

// watcher saga, takeEvery allows concurrent actions to be called
function* AddWatcherSaga() {
    yield takeEvery('ADD_TIMESHEET', AddSaga);
}

export default AddWatcherSaga;