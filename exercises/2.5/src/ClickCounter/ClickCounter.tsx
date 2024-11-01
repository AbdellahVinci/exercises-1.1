
import { useState } from 'react';

type ClickCounterProps={
    titre:string;
    message:string;

}

const ClickCounter: React.FC< ClickCounterProps> = ({titre,message}) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div>
    <h2>{titre}</h2>
    {isHovered && <p>Please click on me now!</p>}
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setCount(count + 1)}
    >
      Count is {count}
    </button>
    {count >= 10 && <p>{message}</p>}
  </div>
  
  );
};

export default ClickCounter;
