import React from 'react';
import FacebookLogin from 'react-facebook-login';
function App() {

  

  function getFacebookInfo(response){
    console.log(response)
  }
  return (
    <div>
       <FacebookLogin
            appId="944270946334966"
            autoLoad={false}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={getFacebookInfo}
            // icon="fa-facebook"
            isMobile={true}
            disableMobileRedirect={true}
            textButton={'login'}
            />
    </div>
  );
}

export default App;
