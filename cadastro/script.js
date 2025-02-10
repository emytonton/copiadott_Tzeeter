
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const birthMonth = document.getElementById('birthMonth').value;
    const birthDay = document.getElementById('birthDay').value;
    const birthYear = document.getElementById('birthYear').value;
    const terms = document.querySelector('input[name="terms"]:checked');

    
    if (!name || !email || !password || !confirmPassword || !birthMonth || !birthDay || !birthYear) {
        alert("Todos os campos são obrigatórios.");
        return false;
    }

    
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("A senha e a confirmação de senha devem ser iguais.");
        return false;
    }

    
    if (!terms) {
        alert("Você deve concordar com os termos de uso.");
        return false;
    }

    alert("Cadastro realizado com sucesso!");
    return true;
}


function updateDays() {
    const month = document.getElementById('birthMonth').value;
    const year = new Date().getFullYear();
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

    const daysInMonth = {
        1: 31, 2: isLeapYear ? 29 : 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };

    const birthDaySelect = document.getElementById('birthDay');
    const birthYearSelect = document.getElementById('birthYear');

    
    birthDaySelect.innerHTML = '<option value="">Selecione o Dia</option>';
    birthYearSelect.innerHTML = '<option value="">Selecione o Ano</option>';

   
    for (let i = 1; i <= daysInMonth[month]; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        birthDaySelect.appendChild(option);
    }

    
    if (month == 2 && birthDaySelect.value == 29) {
        const startYear = 1900;
        const endYear = year;

        for (let i = startYear; i <= endYear; i++) {
            if ((i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0))) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                birthYearSelect.appendChild(option);
            }
        }
    } else {
        for (let i = 1900; i <= year; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            birthYearSelect.appendChild(option);
        }
    }
}


document.getElementById('terms').addEventListener('change', function() {
    const submitButton = document.getElementById('submitBtn');
    submitButton.disabled = !this.checked;
});
