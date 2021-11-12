export const sortErrors = (errors) => {
  const sortedErrors = {
    emailErrors: [], 
    passwordErrors: [],
    sessionErrors: []
  }

  Object.values(errors).forEach(error => {
    const firstWord = error.split(" ")[0];
    
    switch (firstWord) {
      case "Email":
        sortedErrors.emailErrors.push(error);
        break;
      case "Password":
        sortedErrors.passwordErrors.push(error);
        break;
      default:
        sortedErrors.sessionErrors.push(error);
        break;
    }
  });

  return sortedErrors;
}