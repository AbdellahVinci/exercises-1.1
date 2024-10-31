import React from 'react';

type UserCardProps={
    nom:string;
    age:number;
    isOnline: boolean;
};

const UserCard: React.FC< UserCardProps>=({nom,age,isOnline})=>{
    return(

        <div className="user-card"> 
         <h2 style={{ fontSize: '1.5em' }}>{nom}</h2>
        <p>Age: {age}</p>
        <p style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'En ligne' : 'Hors ligne'}
      </p>
      </div>
    );
  };
  
  export default UserCard;