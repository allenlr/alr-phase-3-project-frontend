import React from "react";

function Home({ currentUser }){
   const name = currentUser? currentUser.first_name : undefined;

   function displayWelcomeMessage(){
        return 'Welcome';
   }

    return (
        <div>
            {displayWelcomeMessage()}
        </div>
    )
}

export default Home;