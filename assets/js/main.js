function Calculadora() {
    this.display = document.querySelector(".display");

    this.capturaCliques = () => {
        document.addEventListener("click", e => {
            const el = e.target;
            if (el.classList.contains("btn-num")) this.addNumeroDisplay(el);
            if (el.classList.contains("btn-clear")) this.clearDisplay();
            if (el.classList.contains("btn-del")) this.deleteDisplay();
            if (el.classList.contains("btn-eq")) this.showResultDisplay();
        });
    };

    this.addNumeroDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clearDisplay = () => this.display.value = "";

    this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.showResultDisplay = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;    
            }

            this.display.value = conta;

        } catch (error) {
            alert('Conta inválida');
            return;
        }
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.showResultDisplay();
            }
        })
    };

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        this.display.innerHTML = "0";
    };

}

const calculadora = new Calculadora();
calculadora.inicia();