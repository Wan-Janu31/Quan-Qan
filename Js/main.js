
const Name= document.getElementById('name')
const email = document.getElementById('e-mail')
const LName = document.getElementById('lnn')
const nNumberphone= document.getElementById('mbn')
const textar= document.getElementById('text_ar')
const form = document.getElementById('form-a')

const checkboxes = document.querySelectorAll('#chs input[type="checkbox"]');
let isCheckboxChecked = false;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

   
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidphone = nNumberphone => {
    var phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(nNumberphone);
}



const validateInputs = () => {
    const usernameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const userlnameValue = LName.value.trim();
    const numberphone=nNumberphone.value.trim();
    const Tarea=textar.value.trim();
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          isCheckboxChecked = true;
          const chsElement = document.getElementById('chs');
          setSuccess(chsElement);
        }
      });

    if (usernameValue === '') {
        setError(Name, 'Firstname is required');
    }else if(usernameValue.length < 3 || usernameValue.length>30){
        setError(Name, 'Firstname must be > 3 and <30 character')
    }
     else {
        setSuccess(Name);
    }

    if (userlnameValue === '') {
        setError(LName, 'lastname is required');
    }else if(userlnameValue.length < 3 || userlnameValue.length>30){
        setError(LName, 'lastname must be > 3 and <30 character')
    }
     else {
        setSuccess(LName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


    if (numberphone === '') {
        setError(nNumberphone, 'phonenumber is required');
    } else if (!isValidphone(numberphone)) {
        setError(nNumberphone, 'Provide phonenumber valid');
    } else {
        setSuccess(nNumberphone);
    }

    
    if (Tarea === '') {
        setError(textar, 'comment content is required');
    }else if(Tarea.length < 20){
        setError(textar, 'comment content must be than 20 character')
    }
     else {
        setSuccess(textar);
    }

    
    if (!isCheckboxChecked) {
        setError(document.getElementById('chs'), 'choice at least one checkbox, please');
      } else {
        setSuccess(document.getElementById('chs'));
      }
    
};


