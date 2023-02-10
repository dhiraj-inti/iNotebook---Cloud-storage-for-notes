import Notes from './Notes';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';

export const Home = (props) => {
    let history = useHistory();
    const context = useContext(noteContext);
    const {getNotes} = context;
    useEffect(() => {
        async function init(){
            if(!localStorage.getItem('token')){
                history.push('/login')
            }
            await getNotes();
        }
        init();
        // eslint-disable-next-line
    }, [])
    return (
        <div> 
            <Notes showAlert={props.showAlert}/>
        </div>
    )
}
