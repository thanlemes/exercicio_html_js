const form = document.getElementById('form-campo');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var campoA = document.getElementById('campo-a').value;
    var campoB = document.getElementById('campo-b').value;
 
    console.log(campoA, ' - ', campoB)
        if (validaCampo(campoA,campoB)) {
            alert("Formulário válido, B é maior que A.");
        } else {
            alert("Formulário inválido, B deve ser maior que A.");
        }
        
    })
    
    function validaCampo(a,b){
        var valueA = a.replace(',','.');
        var valueB = b.replace(',','.');
        if (valueA < valueB) {
            return true;
        }
        return false;
    }