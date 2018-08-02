
		document.addEventListener("DOMContentLoaded", function(event) {
            console.log("loaded");
            	var loginBtn = document.getElementById('login'),
				registrationBtn = document.getElementById('registration'),
				btnCont = document.querySelector('.authy__btnSubCont'),
				loginCont = document.querySelector('.authy__loginCont'),
				registrationCont = document.querySelector('.authy__registrationCont'),
				registrationDocSelect = document.querySelector('.authy__registrationSelect--Doc'),
				registrationInputpass = document.getElementById('passportInput'),
				registrationInputpesel = document.getElementById('peselInput');

		btnCont.addEventListener('click', function(e){
			if (e.target.id == "login") {
				loginCont.style.display = 'block';
				registrationCont.style.display = 'none';
				loginBtn.classList.add('authy__btn--active');
				registrationBtn.classList.remove('authy__btn--active');
			}
			else {
				loginCont.style.display = 'none';
				registrationCont.style.display = 'block';
				loginBtn.classList.remove('authy__btn--active');
				registrationBtn.classList.add('authy__btn--active');
			}
		});

		registrationDocSelect.addEventListener('change', function(e){
			var selectedOption = e.target.options[e.target.selectedIndex].value;
			if (selectedOption == 'pesel') {
				registrationInputpesel.classList.add('authy__registrationInput--visible');
				registrationInputpesel.removeAttribute('disabled');
				registrationInputpass.classList.remove('authy__registrationInput--visible');
				registrationInputpass.setAttribute('disabled', 'true');

			}
			else {
				registrationInputpesel.classList.remove('authy__registrationInput--visible');
				registrationInputpesel.setAttribute('disabled', 'true');
				registrationInputpass.classList.add('authy__registrationInput--visible');
				registrationInputpass.removeAttribute('disabled');
			}

		});

	});