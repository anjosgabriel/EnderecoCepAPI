botao = document.getElementById("busca_cep")
botao.addEventListener('click', function(){
   cep = document.getElementById("cep").value
   url = "https://viacep.com.br/ws/" + cep + "/json"
   fetch(url)
       .then(response => response.json())
       .then(data => {
          log = document.getElementById("logradouro")
          log.value = data.logradouro
          bai = document.getElementById("bairro")
          bai.value = data.bairro
          muni = document.getElementById("municipio")
          muni.value = data.localidade 
       })            
})