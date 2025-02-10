// primeito contador
const textarea = document.querySelector('.input-area');
const contador = document.querySelector('.contador');
const botaoEnviar = document.querySelector('.botao-enviar');
const maxLength = 140;

textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    const remaining = maxLength - length;

    if (length === 0) {
        contador.style.display = 'none';
        botaoEnviar.disabled = true;
    } else {
        contador.style.display = 'inline';
        
        if (remaining > 0) {
            contador.textContent = `${remaining}`;
            contador.style.color = remaining < 40 ? 'rgb(255, 200, 0)' : 'initial';
            botaoEnviar.disabled = false;
        } else {
            contador.textContent = ` -${-remaining}`;
            contador.style.color = 'rgb(255, 0, 0)';
            botaoEnviar.disabled = true;
        }
    }
});


textarea.dispatchEvent(new Event('input'));



document.addEventListener("DOMContentLoaded", () => {
    const tweetButton = document.getElementById("tweet-button");
    const modal = document.getElementById("custom-modal");
    const closeModal = document.getElementById("close-modal");
    const textInput = document.querySelector(".text-input");
    const charCounter = document.querySelector(".char-counter");
    const sendButton = document.querySelector(".send-btn");
    const maxLength = 140; 

    
    tweetButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        textInput.value = ""; 
        textInput.dispatchEvent(new Event('input')); 
    });

    
    textInput.addEventListener("input", () => {
        const length = textInput.value.length;
        const remaining = maxLength - length;

        if (length === 0) {
            charCounter.style.display = 'none';
            sendButton.disabled = true;
        } else {
            charCounter.style.display = 'inline';

            if (remaining > 0) {
                charCounter.textContent = `${remaining}`;
                charCounter.style.color = remaining < 40 ? 'rgb(255, 200, 0)' : 'initial';
                sendButton.disabled = false;
            } else {
                charCounter.textContent = ` -${-remaining}`;
                charCounter.style.color = 'rgb(255, 0, 0)';
                sendButton.disabled = true;
            }
        }
    });

    
    textInput.dispatchEvent(new Event('input'));
});
