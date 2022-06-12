import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './ClientDetailsItem.scss';



// MUI imports
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';


export default function ClientDetailsItems({ timesheet }) {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleEdit = () => {
        dispatch({ type: 'SET_CLIENT_UPDATE_TIMESHEET', payload: timesheet })
        history.push('/updateClientTimesheetForm');
    }; // end of handleEdit




    // when edit is pressed it will bring you to edit form page 
    const ButtonEdit = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#f0f0f0',
        borderColor: '#fff',
        color: '#683aff',
    });



    return (

        <div className='edit-client'>


            <ButtonEdit
                fontSize='large'
            >

                <EditIcon
                    onClick={handleEdit}
                    fontSize='large'

                />
            </ButtonEdit>




        </div>
    )


}; // ClientDetailsItems