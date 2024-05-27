
        function calcular() {
            const numero = parseInt(document.getElementById("numero").value);
            const fatorial = calcularFatorial(numero);
            const fibonacci = gerarFibonacci(numero);

            document.getElementById("resultado").innerHTML = `
                Fatorial de ${numero}: ${fatorial}<br>
                Sequência de Fibonacci até ${numero}: ${fibonacci.join(", ")}
            `;
        }

        function calcularFatorial(numero) {
            if (numero < 0) {
                return "O número deve ser positivo.";
            } else if (numero === 0 || numero === 1) {
                return 1;
            } else {
                let resultado = 1;
                for (let i = 2; i <= numero; i++) {
                    resultado *= i;
                }
                return resultado;
            }
        }

        function gerarFibonacci(numero) {
            if (numero < 0) {
                return "O número deve ser positivo.";
            } else if (numero === 0) {
                return [0];
            } else if (numero === 1) {
                return [0, 1];
            } else {
                const fibonacci = [0, 1];
                for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= numero; i++) {
                    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
                }
                return fibonacci;
            }
        }
   