import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import TimesheetItem from '../TimesheetItem/TimesheetItem';

import Button from '@mui/material/Button';

import Footer from '../Footer/Footer';

import './ClientDetails.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ClientDetails() {

    const { client } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENT' })
        dispatch({ type: 'FETCH_CLIENT_SHEET', payload: client })
    }, [location]) // end of useEffect


    const clientInfoReducer = useSelector(store => store.clientInfoReducer);
    const timesheetClientReducer = useSelector(store => store.timesheetClientReducer);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const timesheetPush = () => {
        history.push('/timesheetForm');
    }


    console.log(clientInfoReducer)

    return (
        <>

            <Helmet>
                <style>{`body { background-image: url("https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                background-repeat: no-repeat; background-size: cover; background-position: -80px 120px; }`}

                </style>
            </Helmet>
            <div id='one'>
                <h1>HELLO</h1>
                {clientInfoReducer.filter(item => item.client_fullname === client).map((item, i) => {
                    return (
                        <>
                            <Avatar
                                id='avatar-details'
                                src={item.image_url}
                                sx={{ width: 100, height: 100 }}
                            />


                            <div id='client-header-name'>
                                {item.client_fullname}
                            </div>


                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label={"Timesheet"} {...a11yProps(0)} />
                                        <Tab label={"Info"} {...a11yProps(2)} />
                                        <Tab label="History" {...a11yProps(3)} />
                                        <Tab label="Hobbies" {...a11yProps(4)} />

                                    </Tabs>

                                </Box>



                                <TabPanel

                                    value={value} index={0}>
                                    <Button
                                        onClick={timesheetPush}
                                    >Add</Button>


                                    {timesheetClientReducer.map((timesheetItem, i) => {
                                        return (

                                            <TimesheetItem
                                                key={i}
                                                timesheetItem={timesheetItem} />

                                        );
                                    })}


                                </TabPanel>
                                <TabPanel
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = `https://www.google.com/maps?q=${item.address}`;
                                    }}
                                    value={value} index={1}>
                                    {item.address}
                                    <Divider />
                                    Mobile: {item.phone}
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    {item.history}
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    {item.hobbies}
                                </TabPanel>

                            </Box>
                        </>
                    );
                })}




                {/* <Footer /> */}
            </div>



        </>
    )

}
