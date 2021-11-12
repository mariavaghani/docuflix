export const sortErrors = (errors) => {
  const sortedErrors = {
    emailErrors: [], 
    passwordErrors: [],
    sessionErrors: []
  }

  Object.values(errors).forEach(error => {
    console.log(`error.split(" ")[0]: `, error.split(" ")[0]);
    const firstWord = error.split(" ")[0];
    console.log(`firstWord: `, firstWord);
    
    switch (firstWord) {
      case "Email":
        console.log(`error: `, error);
        
        sortedErrors.emailErrors.push(error);
        break;
      case "Password":
        console.log(`error: `, error);
        
        sortedErrors.passwordErrors.push(error);
        break;
      default:
        console.log(`error: `, error);
        
        sortedErrors.sessionErrors.push(error);
        break;
    }
    // if ( error.startsWith("Email") ) sortedErrors.emailErrors.push(error);
    // if ( error.startsWith("Password") ) sortedErrors.passwordErrors.push(error);
    // if ( !error.startsWith("Password") &  ) sortedErrors.passwordErrors.push(error);
  });

  return sortedErrors;
}