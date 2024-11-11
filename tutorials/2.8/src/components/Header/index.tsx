import { useState } from "react";
import { RefObject } from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
  version: number;
  audioRef: RefObject<HTMLAudioElement>; 
}

const Header = ({ title, version, audioRef }: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    
    setMenuPrinted(!menuPrinted);

    if (audioRef.current) {
      
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  console.log("Header rendu");

  return (
    <header onClick={handleClick}>
      <h1 className="animate__animated animate__bounce">
        {menuPrinted ? `${title}... and rarely do we hate it!`:title}
      </h1>
      <h4>Version: {version}</h4>
    </header>
  );
};

export default Header;
