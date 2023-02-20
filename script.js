let nota1 = document.querySelector('input#txt1nota')
let nota2 = document.querySelector('input#txt2nota')
let nota3 = document.querySelector('input#txt3nota')
let bonus = document.querySelector('input#txtbonus')
let box = document.querySelector('select#notas')
let res = document.querySelector('div#res')
let val = []

function pn(n1, n2, n3, b) {

    if(Math.sign(n1) === -1 || Math.sign(n2) === -1 || Math.sign(n3) === -1 || Math.sign(b) === -1 ) {

        return true

    } else {

        return false
    }

}

function calcular() {

    val.length = 0

    if(nota1.value.length === 0 || nota2.value.length === 0 || nota3.value.length === 0 || bonus.value.length === 0 ) {

        window.alert('[ERRO] Insira um valor para cada opção!')

    } else if ( pn(nota1.value, nota2.value, nota3.value, bonus.value )) {

        window.alert('[ERRO] Insira apenas valores positivos!')
   
    } else if ( nota1.value > 10 || nota2.value > 10 || nota3.value > 10 || bonus.value > 10) {

        window.alert('[ERRO] O valor das notas não pode ultrapassar 10,0!')

    } else if (bonus.value > 1) {

        window.alert('[ERRO] O valor do bônus não pode ultrapassar 1,0!')

    } else {
        
        val.push(Number(nota1.value))
        val.push(Number(nota2.value))
        val.push(Number(nota3.value))
        val.push(Number(bonus.value))
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.innerHTML = ''
        box.innerHTML = ''
       
        let valor1 = document.createElement('option')
        valor1.text = `Sua 1º nota foi ${nota1.value}`
        box.appendChild(valor1)
        let valor2 = document.createElement('option')
        valor2.text = `Sua 2º nota foi ${nota2.value}`
        box.appendChild(valor2)
        let valor3 = document.createElement('option')
        valor3.text = `Sua 3º nota foi ${nota3.value}`
        box.appendChild(valor3)

        if (Number(bonus.value) === 0 ) {

            let b = document.createElement('option')
            b.text = `Você não recebeu nenhum bônus.`
            box.appendChild(b) 

        } else {

            let b = document.createElement('option')
            b.text = `Você recebeu um bônus de ${bonus.value}`
            box.appendChild(b)
            
        }

        let nt1 = Number(nota1.value)
        let nt2 = Number(nota2.value)
        let nt3 = Number(nota3.value)
        let bn = Number(bonus.value)

        let soma = nt1 + nt2 + nt3

        res.innerHTML = `<p>A soma das notas é igual a <strong>${soma.toFixed(1)}</strong></p>`

        let maior = val[0]
        let menor = val[0]
        
        for(let pos = 0; pos < val.length - 1; pos++) {

            if(val[pos] > maior) {
                maior = val[pos]
            }
    
            if (val[pos] < menor) {
                menor = val[pos]
            }

        }

        res.innerHTML += `<p>A sua menor nota foi <strong>${menor.toFixed(1)}</strong></p>`
        res.innerHTML += `<p>A sua maior nota foi <strong>${maior.toFixed(1)}</strong></p>`
        
        let acima = 0
        let abaixo = 0

        for(let posi = 0; posi < val.length - 1; posi++) {

            if(val[posi] >= 6) {

                acima++

            } 
            
            if(val[posi] < 6) {

                abaixo++
            }

        }

        if (acima === 3) {

            res.innerHTML += `<p>Todas as suas notas estão <strong>acima</strong> da média!</p>`

        } else if(abaixo === 3 ) {

            res.innerHTML += `<p>Todas as suas notas estão <strong>abaixo</strong> da média!</p>`

        } else {

            res.innerHTML += `<p>Você tem <strong>${acima}</strong> nota(s) acima da média e <strong>${abaixo}</strong> nota(s) abaixo da média!</p>`

        }

        let media = soma / 3
        let medfinal = media + bn


        if(bn === 0 ) {

            res.innerHTML += `<p>A sua média final é igual a <strong>${media.toFixed(1)}</strong></p>`

        } else {

            if(medfinal > 10) {

                medfinal = 10.0
    
            }

            res.innerHTML += `<p> A sua média final somada com o bônus é igual a <strong>${medfinal.toFixed(1)}</strong></p>`
        }


        if(medfinal >= 6) {

            res.innerHTML += `<p><center><strong>APROVADO</strong>,PARABÉNS!!</center></p>`
            img.setAttribute('src', 'imagens/aprovado.png' )
            res.appendChild(img)
            

        } else {

            res.innerHTML += `<p><center><strong>REPROVADO!</strong></center></p>`
            img.setAttribute('src', 'imagens/reprovado.png')
            res.appendChild(img)
            
        }
        
            
    }
}
function limpar() {

    val.length = 0
    res.innerHTML = ''
    box.innerHTML = ''
    nota1.value = ''
    nota2.value = ''
    nota3.value = ''
    bonus.value = ''

}
nota1.focus()

