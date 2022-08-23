const ACCORDION = document.querySelectorAll('.accordion');

document.addEventListener('click', (e) => {
    e.preventDefault();
    el = e.target;

    const PARENT_ELEMENT_ARROW_DOWN = (el.parentElement).parentElement;
    const ARRAY_PARENT_ELEMENT_ARROW_DOWN = Array.from(PARENT_ELEMENT_ARROW_DOWN.children);

    function verificaDisabled() {
        ACCORDION.forEach(e => {
            if(!(e.classList.contains('disabled'))){
                e.classList.add('disabled')
                Array.from(e.parentElement.children).forEach(x => {
                    if(x.classList.contains('question_accordion')){
                        Array.from(x.children).forEach(y => {
                            if(y.classList.contains('question')){
                                y.classList.remove('selected')
                            }
                            if(y.classList.contains('rotate')){
                                y.classList.remove('rotate')
                            }
                        })
                    }
                })
            }
        })
    }


    if(el.classList.contains('question')){
        // aplica o rotate quando clicado na pergunta.
        ARRAY_PARENT_ELEMENT_ARROW_DOWN.forEach(e => {
            if(e.classList.contains('question_accordion')){
                Array.from(e.children).forEach(x => {
                    if(x.classList.contains('arrow_down__accordion')){
                        if (x.classList.contains('rotate')) {
                            x.classList.remove('rotate');
                        } else {
                            x.classList.add('rotate')
                        }
                    }
                })
            }
            
            //verifica se tem classe `disabled` para poder remover e a resposta aparece
            //e modificar o estilo da pergunta
            if (e.classList.contains('disabled')) {
                Array.from(e.parentElement.children).forEach(x => {
                    if(x.classList.contains('question_accordion')){
                        Array.from(x.children).forEach(y => {
                            if(y.classList.contains('question')){
                                y.classList.add('selected')
                            }
                        })
                    }
                })
                verificaDisabled();
                e.classList.remove('disabled')
            // verifica se tem somente a classe do accordion, então, ele está aberto, fazendo
            // com que possa tirar o accordion e remover a formatação da pergunta.
            } else if (e.classList.contains('accordion')){
                Array.from(e.parentElement.children).forEach(x => {
                    if(x.classList.contains('question_accordion')){
                        Array.from(x.children).forEach(y => {
                            if(y.classList.contains('question')){
                                y.classList.remove('selected')
                            }
                        })
                    }
                })
                e.classList.add('disabled')
            }
        });
    };
    
    // verifica se tem a classe do arrow e se ela está com a classe de rotate e 
    // retira a rotação e coloca para desaparecer o accordion
    if (el.classList.contains('arrow_down__accordion')) {
        if (el.classList.contains('rotate')) {
            el.classList.remove('rotate');
            ARRAY_PARENT_ELEMENT_ARROW_DOWN.forEach(e => {
                if (e.classList.contains('accordion')) {
                    e.classList.add('disabled')
                }
            });
            // se não tiver o rotate, aplica o rotate e mostra o accordion
        } else {
            el.classList.add('rotate')
            ARRAY_PARENT_ELEMENT_ARROW_DOWN.forEach(e => {
                if (e.classList.contains('accordion')) {
                    e.classList.remove('disabled')
                }
            });
        }
    }
})

// aplicação hover
document.addEventListener('mouseout', (e) => {
    e.preventDefault();
    el= e.target;

    if(el.classList.contains('question')) {
        el.style.color = 'hsl(237, 12%, 33%)';
    }
})
document.addEventListener('mouseover', (e) => {
    e.preventDefault();
    el= e.target;

    if(el.classList.contains('question')) {
        el.style.color = 'hsl(14, 88%, 65%)';
        el.style.cursor = 'pointer'
    }
})
