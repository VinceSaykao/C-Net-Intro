import './Timesheet.css';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import TimesheetItem from '../TimesheetItem/TimesheetItem.js';

export default function Timesheet() {

    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET'})
    }, []) // end of useEffect

    
    console.log('this is', timesheetReducer)
    return (
        <div id="timesheet-div">
        <p>Employee Timesheet</p>
        <ul>
        {timesheetReducer.map((timesheetItem, i) => {
                return (
                    <TimesheetItem 
                    key={i} 
                    timesheetItem={timesheetItem} />
                );
            })}
        </ul>
        </div>
    )

}; // end of Timesheet