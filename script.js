document.addEventListener("DOMContentLoaded", () => {

    const botaoComecar =
        document.getElementById("botaoComecar");

    const botaoAgradecimento =
        document.getElementById("botaoAgradecimento");

    const botaoFinal =
        document.getElementById("botaoFinal");

    const botaoRevelar =
        document.getElementById("botaoRevelar");


    const inicio =
        document.getElementById("inicio");

    const desculpas =
        document.getElementById("desculpas");

    const agradecimento =
        document.getElementById("agradecimento");

    const final =
        document.getElementById("final");

    const revelacao =
        document.getElementById("revelacao");

    const galeria =
        document.querySelector(".galeria");

    const fotos =
        document.querySelectorAll(".galeria img");

    const mensagemFinal =
        document.querySelector(".mensagem-final");


    function trocarTela(
        telaAtual,
        proximaTela
    ) {

        telaAtual.classList.remove("ativa");

        setTimeout(() => {

            proximaTela.classList.add("ativa");

        }, 300);

    }


    botaoComecar.addEventListener(
        "click",
        () => {

            trocarTela(
                inicio,
                desculpas
            );

        }
    );


    botaoAgradecimento.addEventListener(
        "click",
        () => {

            trocarTela(
                desculpas,
                agradecimento
            );

        }
    );


    botaoFinal.addEventListener(
        "click",
        () => {

            trocarTela(
                agradecimento,
                final
            );

        }
    );


    botaoRevelar.addEventListener(
        "click",
        () => {

            botaoRevelar.style.display =
                "none";

            revelacao.classList.add(
                "mostrar"
            );

            mostrarFotos();

        }
    );


    function mostrarFotos() {

        let fotoAtual = 0;

        if (fotos.length === 0) {
            return;
        }


        fotos[fotoAtual].classList.add(
            "foto-ativa"
        );


        const intervaloFotos =
            setInterval(
                () => {

                    fotos[fotoAtual].classList.remove(
                        "foto-ativa"
                    );

                    fotoAtual++;


                    if (
                        fotoAtual >= fotos.length
                    ) {

                        clearInterval(
                            intervaloFotos
                        );


                        setTimeout(
                            () => {

                                if (galeria) {

                                    galeria.style.display =
                                        "none";

                                }


                                mensagemFinal.classList.add(
                                    "mostrar"
                                );

                            },
                            800
                        );

                        return;

                    }


                    fotos[fotoAtual].classList.add(
                        "foto-ativa"
                    );

                },
                4000
            );

    }

});