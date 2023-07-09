# :dart: Dia 2 - JavaScript DOM e Seletores
## Exercício Criando Elementos :rocket:

    <main id="paiDoPai">
        <section id="pai">
            <section id="primeiroFilho"></section>
            <section id="elementoOndeVoceEsta">
                <section id="primeiroFilhoDoFilho"></section>
                <section id="segundoEUltimoFilhoDoFilho"></section>
            </section>
            Atenção!
            <section id="terceiroFilho"></section>
            <section id="quartoEUltimoFilho"></section>
        </section>
    </main>
  
    <script>

        //
        // Amarzena o local onde o child será inserido
        const pai = document.getElementById('pai');
        // Cria o elemento irmão
        const irmaoElementoOndeVoceEsta = document.createElement('section');
        // Adiciona a proprieda id="irmaoElementOndeVoceEsta"
        irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'
        // Adiciona o elemento criado ao nó pai
        pai.appendChild(irmaoElementoOndeVoceEsta);
        
        //
        // Crie um filho para `elementoOndeVoceEsta`.
        // Armazena o local aonde o filho será criado
        const paiElemento = document.getElementById('elementoOndeVoceEsta');
        const filhoElementoOndeVoceEsta = document.createElement('section');
        filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
        paiElemento = document.appendChild(filhoElementoOndeVoceEsta); 
        
        //
        // Crie um filho para `primeiroFilhoDoFilho`.
        const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
        const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
        filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
        primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

        //
        // A partir desse filho criado, acesse `terceiroFilho`.
        const terceiroFilho = filhoDoPrimeiroFilhoDoFilho
        .parentElement
        .parentElement
        .nextElementSibling;
        const terceiroFilhoAcesso = terceiroFilho;

    </script>
