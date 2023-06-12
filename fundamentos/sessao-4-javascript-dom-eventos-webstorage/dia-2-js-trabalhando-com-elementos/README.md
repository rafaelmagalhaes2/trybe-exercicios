# :dart: Dia 2 - JavaScript DOM e Seletores
## Exercício Buscando Elementos :rocket:

    <main id="parent-of-parent">
        <section id="parent">
            <section id="first-child"></section>
            <section id="where-are-you">
                <section id="first-child-of-child"></section>
            </section>
            Attention!
            <section id="third-child"></section>
            <section id="fourth-and-last-child"></section>
        </section>
    </main>
    
    <script>
        // Acesse o elemento where-are-you
        const whereAreYou = document.getElementById('where-are-you');
        
        // Acesse parent a partir de where-are-you e adicione uma color a ele
        const parent = whereAreYou.parentElement;
        parent.style.color = 'crimson';

        // Acesse o first-child-of-child e adicione um texto a ele.
        const firstChildOfChild = whereAreYou.firstElementChild;
        firstChildOfChild.innerText = 'Texto adicionado';

        // Acesse first-child apartir de parent
        const firstChild = parent.firstElementChild;

        // Acesse o first-child a partir de where-are-you. 
        const firstChild2 = whereAreYou.previousElementSibling;

        // Acesse o texto Attention! a partir de where-are-you.
        const textElement = whereAreYou.nextSibling;

        // Acesse o third-child a partir de where-are-you.
        const thirdChild = whereAreYou.nextElementSibling;

        // Acesse o third-child a partir de parent.
        const thirdChild2 = parent.lastElementChild.previousElementSibling;
    </script>
