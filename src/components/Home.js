import Notes from './Notes';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const Home = (props) => {
    let history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('token')){
            history.push('/login')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div> 
            <Notes showAlert={props.showAlert}/>
        </div>
    )
}
