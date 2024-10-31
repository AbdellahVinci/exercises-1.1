import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

const App: React.FC = () => {
    return (

        <div>
            <h1>Informations sur les utilisateurs:</h1>
            <UserCard nom="Abdellah" age={19} isOnline={true}/>
            <UserCard nom="Sarah" age={29} isOnline={false}/>
            <UserCard nom="Jude" age={25} isOnline={true}/>

        </div>
    );
};
export default App;