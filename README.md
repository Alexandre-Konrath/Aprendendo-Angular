<h1 align="center"> Primeiro projeto com Angular </h1>

<br />

## Descrição do projeto
  O site não é nem um pouco bonito e organizado, mas serve para aprender o básico sobre este framework e testar diversas coisas que fui  
  aprendendo ao longo dos vídeos do YouTube.  
<br />
  Na semana passada, decidi aprender um novo framework. Pesquisei e encontrei o Angular. Confesso que nunca tinha ouvido falar nisso.  
  Vi que ele estava chegando perto do React em termos de popularidade. Então, iniciei meus estudos para aprender mais sobre e encontrei  
  o canal do Matheus Battisti no YouTube, ensinando o básico do Angular. Ele explica e ensina de uma forma muito simples e mostra na prática  
  o que cada coisa faz. Se estiver interessado em aprender Angular, recomendo muito este canal.  

<br />
<br />

## Desafios Encontrados
### - Instalação do Projeto
  Aprender um framework novo é sempre um desafio, né? Mas o que tornou mais fácil foi que a base do Angular é o TypeScript, e eu já  
  tinha um pouco de conhecimento sobre isso. Fora isso, era um ambiente novo e desconhecido para mim.  
<br />
  Para iniciar o projeto, você tem que primeiro instalar o Angular CLI com o npm install `-g @angular/cli`. Depois disso, para executar os  
  comandos, você deve começar com ng ou `ng --help` para ver uma boa parte dos outros comandos que podem ser executados.  
<br />
  Iniciei meu primeiro projeto com ng `new primeiro-projeto`. Ele me fez algumas perguntas iniciais se eu queria *css* ou *sass* para estilizar o site  
  achei super interessante. Criei o projeto, porém ele era diferente do que no vídeo do YouTube estava, não vinha com a pasta ***app.module.ts***, 
  que é muito importante para fazer o import dos outros componentes de forma automática. Ainda não sei por que isso aconteceu, pesquisei e  
  descobri que nas últimas versões não é mais necessário este arquivo pois os imports são feitos diretamente no componente e para resolver  
  este problema criei o projeto com o comando `ng new primeiro-projeto --no-standalone --routing --ssr=false`, e assim ele gerou o projeto  
  normalmente com a pasta ***app.module.ts***.
<br />

### - Estrutura do Projeto
  Estruturalmente um projeto em Angular é bem diferene como no React que era o que eu estava mais familiarizado mas a lógica é bem parecia.  
  Tem como arquivo principal o html que é nele que você faz o import no formato de ***tags personalizadas***, coisa nova que eu achei bem difente  
  e prática, neste html tem o css dele que é onde vai os estilos globais da pagina e cada componente tem seu css e o estilo do mesmo não escapa  
  para os outros componentes e pra quem é front, isso é uma mão na roda do caralho.


<br />
<br />

## Tudo o que foi aprendido
  É uma parte meio extensa, mas é para explicar e mostrar tudo que foi aprendido durante os vídeos de Angular.  



| script | Explicação |
|--------|-------------|  
| ***"json-server"*** | . |
