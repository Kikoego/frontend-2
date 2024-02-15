import { APIURLS } from "./APIURLS";

const SignUp = async (req) => {

    const param = req

    if (!validateData(param)){
      return null;
    }
    
    let url = APIURLS.register
    let formData = new FormData()

    for ( var key in req ) {
      formData.append(key, req[key]);
    }

    fetch(url, {
        method: 'post',
        body: formData
    })

    .then(response => response.json())  
    .then(function(response) {

        if(response.status == "Success")
        {
          console.log('all good')
          return response;         
        }
        else{
          throw new Error(response.message);
        }
        
        
        
    })  
    .then(function(text) {     
      showErrorField(text.message) 
      console.log('Request successful', text);  
    })  
    .catch(function(error) {
      showErrorField(error) 
      console.log(error)                    
    });
}

const showErrorField = (text) =>{
  if (!document.getElementById("error-holder").classList.contains("slide-up")){
    document.getElementById("error-holder").classList.remove("h-0");
    document.getElementById("error-holder").classList.add("h-10");
    document.getElementById("form-holder").classList.remove("mt-12");
    document.getElementById("form-holder").classList.add("mt-2");
    document.getElementsByClassName("text-error-holder")[0].innerHTML = text;
  }
}

const validateData = (values) => {
  const Username = values.Username
  const Email = values.Email
  const Password = values.Password

  if (Email === '' || Password === '' || Username === ''){
    showErrorField("Заполните все поля")
    return false
  }

  let emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const email = Email.toLowerCase()
  if (emailRegExp.test(email) !== true){
    showErrorField("Введите корректную почту")
    return false
  }

  var passwordRegExp = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
  if (passwordRegExp.test(Password) !== true ){
    showErrorField("Введите нестыдный пароль")
    return false
  }

  var usernameRegExp = /^[a-zA-Z0-9\-_\@]+$/  //all латинские буквы, символы "-", "_", "@"
  if (usernameRegExp.test(Username) !== true || Username.length <=2 || Username.length >= 30){
    showErrorField("Введите нестыдное погоняло")
    return false;
  }
  return true;
}

const setAsLogin = () => {
  document.getElementById("signup-window").classList.add("slide-up");
  document.getElementById("login-window").classList.remove("slide-up");
  document.getElementById("error-holder").classList.remove("h-10");
  document.getElementById("error-holder").classList.add("h-0");
  document.getElementsByClassName("text-error-holder")[0].innerHTML = '';
  document.getElementById("form-holder").classList.remove("mt-2");
  document.getElementById("form-holder").classList.add("mt-12")
}

const setAsSignUp = () => {
  document.getElementById("login-window").classList.add("slide-up");
  document.getElementById("signup-window").classList.remove("slide-up");
}

const setTypeOfForm = (typeOfAuth) => {

  if (typeOfAuth === "Login"){
    setAsLogin();
  }

  else if (typeOfAuth === "Registration"){
    setAsSignUp();
  }

}

export {SignUp, setTypeOfForm}  