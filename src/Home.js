import React from "react";

function Home(){

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