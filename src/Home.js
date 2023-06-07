import React from "react";

function Home({ currentUser }){
   const name = currentUser? currentUser.first_name : "noname";
    return (
        <div>
            {currentUser? `Welcome, ${name.split('')[0].toUpperCase() + name.slice(1, name.length)}` : `Welcome to FinancEase, please Log In to Start`}
        </div>
    )
}

export default Home;