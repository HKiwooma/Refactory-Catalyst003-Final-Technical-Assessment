function formValidation()							 
{ 
  var surname = document.forms["registration"]["surname"];
  var givenname = document.forms["registration"]["givenname"];
  var dob = document.forms["registration"]["dob"]; 
	var phone = document.forms["registration"]["phone"]; 
  var country = document.forms["registration"]["country"]; 
  var residence = document.forms["registration"]["residence"];
  var email = document.forms["registration"]["email"]; 

  if (surname.value == "")								 
	{ 
    const log1 = document.getElementById('log1');
    log1.textContent = "Surname is required!"; 
    surname.focus(); 
		return false; 
  }
  if (givenname.value == "") {
    const log2 = document.getElementById('log2');
    log2.textContent = "Given name is required!"; 
    givenname.focus();
    return false;
  } 
  if (dob.value == "") {
    const log3 = document.getElementById('log3');
    log3.textContent = "Date of Birth is required!";
    dob.focus();
    return false;
  }

  if (country.value == "") {
    const log4 = document.getElementById('log4');
    log4.textContent = "Country Field is required!";
    country.focus();
    return false;
  } 
	
	if (residence.value == "")					 
	{ 
    const log5 = document.getElementById('log5');
    log5.textContent = "This Field is required!"; 
		residence.focus(); 
		return false; 
  }

  if (phone.value == "") {
    const log6 = document.getElementById('log6');
    log6.textContent = "This Field is required!";
    phone.focus();
    return false;
  } 

  if (email.value == "") {
    const log7 = document.getElementById('log7');
    log7.textContent = "This Field is required!";
    email.focus();
    return false;
  }

	return true; 
}


/* Creating a rest handler that will be triggered after event reset. 
  -event handle -logReset
  -reset is an the event
*/
function logReset(e) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}
//accessing dom element and we set a listener to form tag
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('reset', logReset);