// ==========================================
// 1) FUNÇÃO MAIOR_MENOR
// ==========================================
function MAIOR_MENOR(a, b, c, d, e) {
    let maior = Math.max(a, b, c, d, e);
    let menor = Math.min(a, b, c, d, e);
    return `Maior: ${maior} | Menor: ${menor}`;
}

function dispararMaiorMenor() {
    let a = parseInt(document.getElementById('ex1_a').value);
    let b = parseInt(document.getElementById('ex1_b').value);
    let c = parseInt(document.getElementById('ex1_c').value);
    let d = parseInt(document.getElementById('ex1_d').value);
    let e = parseInt(document.getElementById('ex1_e').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
        document.getElementById('res_ex1').innerText = "Por favor, preencha todos os campos.";
        return;
    }
    document.getElementById('res_ex1').innerText = MAIOR_MENOR(a, b, c, d, e);
}

// ==========================================
// 2) FUNÇÃO VOGAL
// ==========================================
function VOGAL(c) {
    // Transforma em minúscula para facilitar a checagem
    let caractere = c.toLowerCase();
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        return 1;
    } else {
        return 0;
    }
}

function dispararVogal() {
    let c = document.getElementById('ex2_c').value;
    if (!c) {
        document.getElementById('res_ex2').innerText = "Digite um caractere.";
        return;
    }
    let resultado = VOGAL(c);
    document.getElementById('res_ex2').innerText = `Retorno: ${resultado} (${resultado === 1 ? 'É vogal' : 'Não é vogal'})`;
}

// ==========================================
// 3) FUNÇÃO LIMITES (Intervalo Aberto)
// ==========================================
function LIMITES(li, ls) {
    let pares = [];
    let somatorio = 0;
    
    // Intervalo aberto significa que NÃO inclui o 'li' e nem o 'ls'
    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            somatorio += i;
        }
    }
    return `Números pares: ${pares.length > 0 ? pares.join(', ') : 'Nenhum'} | Somatório: ${somatorio}`;
}

function dispararLimites() {
    let li = parseInt(document.getElementById('ex3_li').value);
    let ls = parseInt(document.getElementById('ex3_ls').value);
    
    if (isNaN(li) || isNaN(ls)) {
        document.getElementById('res_ex3').innerText = "Preencha os limites.";
        return;
    }
    document.getElementById('res_ex3').innerText = LIMITES(li, ls);
}

// ==========================================
// 4) FUNÇÃO ORDEM
// ==========================================
function ORDEM(a, b, c) {
    let arrayOrdenado = [a, b, c].sort((x, y) => x - y);
    return arrayOrdenado; // Retorna o array ordenado crescentemente
}

function dispararOrdem() {
    let a = parseInt(document.getElementById('ex4_a').value);
    let b = parseInt(document.getElementById('ex4_b').value);
    let c = parseInt(document.getElementById('ex4_c').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('res_ex4').innerText = "Preencha todos os campos.";
        return;
    }
    let resultado = ORDEM(a, b, c);
    document.getElementById('res_ex4').innerText = `Ordenado: ${resultado.join(', ')}`;
}

// ==========================================
// 5) FUNÇÃO POSITIVO_NEGATIVO
// ==========================================
function POSITIVO_NEGATIVO(x) {
    return x >= 0; // Retorna true se for positivo (ou zero) e false se for negativo
}

function dispararPositivoNegativo() {
    let x = parseInt(document.getElementById('ex5_x').value);
    if (isNaN(x)) {
        document.getElementById('res_ex5').innerText = "Digite um número.";
        return;
    }
    let resultado = POSITIVO_NEGATIVO(x);
    document.getElementById('res_ex5').innerText = `Retorno Booleano: ${resultado} (${resultado ? 'Positivo' : 'Negativo'})`;
}

// ==========================================
// 6) FUNÇÃO PAR_IMPAR
// ==========================================
function PAR_IMPAR(x) {
    return x % 2 === 0; // Retorna true se par, false se ímpar
}

function dispararParImpar() {
    let x = parseInt(document.getElementById('ex6_x').value);
    if (isNaN(x)) {
        document.getElementById('res_ex6').innerText = "Digite um número.";
        return;
    }
    let resultado = PAR_IMPAR(x);
    document.getElementById('res_ex6').innerText = `Retorno Booleano: ${resultado} (${resultado ? 'Par' : 'Ímpar'})`;
}