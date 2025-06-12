const historia = {
    inicio: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1560305238-8f97fccf50a4?auto=format&fit=crop&w=800&q=80" alt="Capítulo 1 - O Jogo das Paixões" />
        </div>
        <h2>Capítulo 1: O Jogo das Paixões</h2>
        <p>O sinal tocou, anunciando o início de mais um dia no Colégio Estrela do Saber, e o corredor principal fervia com a energia típica de quem tinha histórias para viver. Lucas, loiro de olhos castanhos melados e presidente do grêmio, caminhava com confiança, cumprimentando todos com um sorriso fácil. Ao seu lado, Wendriely, ruiva de batom vermelho e passos de femme fatale, desviava olhares cobiçosos com um suspiro de tédio—até que algo (ou melhor, alguém) chamou sua atenção.</p>
        <p>Toninho, o primo bombado de coxas que desafiavam a física do uniforme escolar, passou por eles com uma bolsa de jiu-jitsu no ombro, suor brilhando no pescoço após o treino matinal. Wendriely travou—literalmente—e seu caderno caiu no chão com um tump.</p>
        <p>— "Deixa, eu pego." Toninho se abaixou rápido, musculatura tensa sob a camisa, e entregou o caderno com um sorriso que deixou Wendriely sem ar.</p>
        <p>Enquanto isso, Lucas via Gustavo, o garanhão do time de vôlei, se aproximando com um grupo de amigos. Seus músculos definidos e aquele olhar de "eu sei que você me quer" fizeram o presidente do grêmio engolir seco.</p>
      `,
      opcoes: [
        { texto: "Lucas age! Ele chama Gustavo para uma reunião do grêmio (que nem existe) só para ficar perto dele.", proximo: "cap1_op1" },
        { texto: "Wendriely ataca! Ela 'acidentalmente' derrama suco em Toninho para 'ajudar' a limpar—e quem sabe ver ele sem camisa.", proximo: "cap1_op2" },
        { texto: "Drama alheio! O pai de Toninho aparece de repente, de carro esportivo, e oferece carona. Todos ficam em choque, especialmente Lucas, que não sabe se olha pro pai ou pro filho.", proximo: "cap1_op3" },
        { texto: "Fuga estratégica! Os dois inventam uma emergência e fogem, mas combinam de se encontrar no intervalo para traçar um plano de conquista.", proximo: "cap1_op4" }
      ]
    },
    cap1_op1: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1586290441005-8fbf35d6c154?auto=format&fit=crop&w=800&q=80" alt="Lucas age!" />
        </div>
        <h2>Capítulo 2: Jogadas Arriscadas - Lucas age!</h2>
        <p>Lucas, com um sorriso político de presidente do grêmio, intercepta Gustavo antes que ele entre na sala.</p>
        <p>— "Ei, Gustavo! A gente precisa do seu apoio numa... reunião do grêmio hoje. É sobre o torneio esportivo." (Mentira descarada.)</p>
        <p>Gustavo ergue uma sobrancelha, os músculos do braço tensionando enquanto cruza os braços.</p>
        <p>— "Reunião? Nunca vi você marcar uma."</p>
        <p>Lucas suava frio. O que ele faz?</p>
      `,
      opcoes: [
        { texto: "Inventa que é sigilosa e sussurra: 'Só os mais importantes foram chamados.'", proximo: "fim1" },
        { texto: "Assume a mentira e diz que esqueceu de avisar, mas 'confia, pô'.", proximo: "fim2" },
        { texto: "Desiste e fala a verdade: 'É que eu queria te ver sozinho.'", proximo: "fim3" },
        { texto: "Gustavo ri e chama ele de desesperado, criando um clima constrangedor.", proximo: "fim4" }
      ]
    },
    cap1_op2: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1573164713898-866f5fcb2677?auto=format&fit=crop&w=800&q=80" alt="Wendriely ataca!" />
        </div>
        <h2>Capítulo 2: Jogadas Arriscadas - Wendriely ataca!</h2>
        <p>Wendriely 'acidentalmente' derrama suco de maracujá em Toninho, manchando seu uniforme branco.</p>
        <p>— "AI, desculpa! Deixa eu ajudar!" (Mãos já puxando a camisa dele.)</p>
        <p>Toninho segura seu pulso, firme:</p>
        <p>— "Tranquilo, princesa. Eu me viro." (Sorriso de quem sabe o jogo.)</p>
        <p>Wendriely reage como?</p>
      `,
      opcoes: [
        { texto: "Insiste: 'Não, eu causei, eu conserto!' (e tenta limpar demais).", proximo: "fim5" },
        { texto: "Finge indignação: 'Tem medo de eu ver seu tanquinho?'", proximo: "fim6" },
        { texto: "Provoca: 'Você tá me chamando de desastrada?' (jogo psicológico).", proximo: "fim7" },
        { texto: "O pai de Toninho aparece do nada e oferece a própria camisa pro filho.", proximo: "fim8" }
      ]
    },
    cap1_op3: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1566075078209-7b9d28f80bc1?auto=format&fit=crop&w=800&q=80" alt="Drama alheio!" />
        </div>
        <h2>Capítulo 2: Drama alheio!</h2>
        <p>O pai de Toninho para seu carro esportivo na frente da escola, vidros abaixados.</p>
        <p>— "Alguém quer carona?" (Todos os alunos suspiram.)</p>
        <p>Lucas fica dividido entre olhar para Gustavo (que ri da situação) e o Deus Careca. O que rola?</p>
      `,
      opcoes: [
        { texto: "Lucas aceita, mas Wendriely puxa ele pra trás: 'Não rouba meu futuro sogro!'", proximo: "fim9" },
        { texto: "Gustavo provoca: 'Tá afim do pai ou do filho, Lucas? Ou quer os dois?'", proximo: "fim10" },
        { texto: "Toninho rola os olhos: 'Pai, para de graça.'", proximo: "fim11" },
        { texto: "O pai diz que só tem espaço pra mais UM e olha fixamente pra Wendriely.", proximo: "fim12" }
      ]
    },
    cap1_op4: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1573972036806-dff94f42b683?auto=format&fit=crop&w=800&q=80" alt="Fuga Estratégica" />
        </div>
        <h2>Capítulo 2: Fuga estratégica!</h2>
        <p>Lucas e Wendriely fogem para o banheiro feminino (só Lucas sofre) e traçam o plano:</p>
        <p>— "Precisamos de ajuda profissional", diz Wendriely.</p>
        <p>— "Chama o Gustavo pra sair e já era!", Lucas respira fundo.</p>
        <p>Eles decidem:</p>
      `,
      opcoes: [
        { texto: "Wendriely finge que Toninho a assediou pra forçar um 'acidente romântico'.", proximo: "fim13" },
        { texto: "Lucas marca um protesto fake pra ficar perto de Gustavo.", proximo: "fim14" },
        { texto: "Pedem conselhos pro pai de Toninho (sim, ele tá no banheiro?).", proximo: "fim15" },
        { texto: "Desistem e compram chocolates pra chorar.", proximo: "fim16" }
      ]
    },

    // --- FINAIS DO CAPÍTULO 2 ---
    fim1: { texto: `...` , opcoes: [] }, // seus finais antigos aqui...

    // ... (mantenha todos os fins de 1 a 16)

    // --- NOVOS FINAIS ADICIONADOS ---
    // ... (mantenha tudo igual até os novos finais)

    // --- NOVOS FINAIS ADICIONADOS ---
    final_tragico: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1507646227548-3C820C26734c?auto=format&fit=crop&w=800&q=80" alt="O Dia em que Todos Morreram" />
        </div>
        <h2>FINAL TRÁGICO: O Dia em que Todos Morreram</h2>
        <p>Durante um passeio na praia, o grupo é surpreendido por um tsunami.</p>
        <p>Lucas salva Gustavo, mas são engolidos pelas ondas.</p>
        <p>Wendriely e Toninho se abraçam em desespero, enquanto o pai de Toninho tenta puxá-los para um lugar seguro, mas uma bala perdida (de um filme sendo gravado na praia) acerta todos.</p>
        <p><strong>Epílogo:</strong> A escola vira um memorial, e no aniversário do acidente, dizem que quatro vultos aparecem na cantina: Lucas abraçado a Gustavo, e Wendriely grávida, de mãos dadas com Toninho e seu pai.</p>
      `,
      opcoes: []
    },
    final_proibido: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1529607687284-a5bd5c7f589c?auto=format&fit=crop&w=800&q=80" alt="Lucas Fica com os Três" />
        </div>
        <h2>FINAL PROIBIDO: Lucas Fica com os Três</h2>
        <p>Lucas, cansado de escolher, assume um relacionamento poliamoroso:</p>
        <ul>
          <li>Gustavo é o namorado oficial (e ciumento).</li>
          <li>Toninho é o amante das aulas de educação física.</li>
          <li>O pai de Toninho é o "sugar daddy" que paga suas contas.</li>
        </ul>
        <p><strong>Clímax:</strong> Wendriely, enlouquecida de ciúmes, incendia a casa do pai de Toninho, mas todos sobrevivem e fogem para Miami. Lucas vira influencer de relacionamentos alternativos.</p>
      `,
      opcoes: []
    },
    final_lascivo: {
      texto: `
        <div class="capitulo-imagem">
          <img src="https://images.unsplash.com/photo-1529607687284-a5bd5c7f589c?auto=format&fit=crop&w=800&q=80" alt="Wendriely e os Três Homens" />
        </div>
        <h2>FINAL LASCIVO: Wendriely e os Três Homens</h2>
        <p>Wendriely engravida, mas não sabe quem é o pai (Toninho, o primo OU o pai careca).</p>
        <p>Toninho assume a criança, mas o bebê nasce careca e musculoso.</p>
        <p>O verdadeiro pai (o careca) faz exame de DNA e processa Wendriely por pensão.</p>
        <p>Gustavo e Lucas, agora casados, adotam a criança pra acabar com a treta.</p>
        <p><strong>Epílogo:</strong> Anos depois, o filho vira lutador de MMA e escreve um livro: "Minha Mãe Era Uma Predadora".</p>
      `,
      opcoes: []
    }
};



// Iniciar a história
mostrarHistoria("inicio");

function mostrarHistoria(chave) {
  const estado = historia[chave];
  if (!estado) return;

  document.getElementById("conteudo").innerHTML = estado.texto;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  if (estado.opcoes.length === 0) {
    const mensagemFinal = document.createElement("p");
    mensagemFinal.textContent = "Fim da história. Quer tentar outro caminho?";
    mensagemFinal.style.marginTop = "20px";
    mensagemFinal.style.fontSize = "1.2em";
    opcoesDiv.appendChild(mensagemFinal);

    const btnRecomecar = document.createElement("button");
    btnRecomecar.textContent = "Recomeçar";
    btnRecomecar.onclick = () => mostrarHistoria("inicio");
    opcoesDiv.appendChild(btnRecomecar);
  } else {
    estado.opcoes.forEach(opcao => {
      const btn = document.createElement("button");
      btn.textContent = opcao.texto;
      btn.onclick = () => mostrarHistoria(opcao.proximo);
      opcoesDiv.appendChild(btn);
    });
  }
}

// Iniciar a história
mostrarHistoria("inicio");