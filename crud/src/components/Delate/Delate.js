import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContect';

const Delate = () => {
    const [user, setUser] = useContext(UserContext);
    const {id} = useParams();

    const setUser = user.filter(user => user.id !== parseInt(id));
    return (
        <div>
            delate
        </div>
    );
};

export default Delate;