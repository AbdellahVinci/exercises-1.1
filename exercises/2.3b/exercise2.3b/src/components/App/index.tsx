
import PageTitle from '../../PageTitle/pagetitle';
import './App.css'
import Footer from '../../Footer/footer';
import UserCard from '../../UserCard/userCard';

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";

  // Utilisation d'un tableau d'objets pour les utilisateurs
  const users = [
    { name: "Abdellah", age: 19 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];


  return (
    <div>
       <PageTitle title={title} />

       {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} />
      ))}

      <Footer text={footerText} />
      </div>
   
  );
};

export default App;
