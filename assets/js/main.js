function criaCalculadora() {
    return {
        display: document.querySelector('.display'),    

        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delDisplay();
                }

                if (el.classList.contains('btn-eq')) {
                    this.showResults();
                }

                //if (el.classList.contains('btn-soma')) {}
                //if (el.classList.contains('btn-sub')) {}
                //if (el.classList.contains('btn-div')) {}
                //if (el.classList.contains('btn-mult')) {}
                

            });
        },

        btnToDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        delDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        showResults() {
            let result = this.display.value;
            
            try {
                result = eval(result);
                if (!result) {
                    alert('Não é possível calcular, conta inválida');
                    return;
                }
                this.display.value = result;
            } catch (error) {
                alert('Não é possível calcular, conta inválida');
                return;
            }
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.showResults();
                }
            });
        }

    };    
}

const calculadora = criaCalculadora();
calculadora.inicia();