import React, { useState } from 'react';
import AppNavigator from './src/navigataion/AppNavigator';
import LoginNavigator from './src/navigataion/LoginNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {

  const[isSignedIn, setIsSignedIn] = useState(false);

return (
<NavigationContainer >
{
isSignedIn ? <AppNavigator/> : <LoginNavigator />
}
</NavigationContainer>
  

)
}

export default App;
