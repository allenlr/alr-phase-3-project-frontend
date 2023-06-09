import React from "react";

function Home({ currentUser }){
   const name = currentUser? currentUser.first_name : undefined;

   function displayWelcomeMessage(name){
    if (!name) {
        return 'Welcome. Please Log in or Create a New Account';
    }
    return `Welcome, ${name.charAt(0).toUpperCase() + name.slice(1)}`;
   }
    return (
        <div>
            {displayWelcomeMessage(name)}
        </div>
    )
}

export default Home;