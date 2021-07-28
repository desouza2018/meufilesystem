'use strict';
const fs = require( 'fs');
fs.watch( 'target.txt' , () => console.log('File changed!'));
console.log('Now watching target.txt for changes...');

/** 
 * Página 12 - 14 do livro Node.js 8 The Right Way
 * 
 * O programa começa com a string 'use strict' no topo. Isso faz com que o programa
 * para ser executado em modo estrito, um recurso introduzido na versão ECMAScript.
 * O modo estrito desativa certos recursos problemáticos da linguagem JavaScript e
 * faz outros lançarem exceções.
 *  É sempre uma boa ideia usar o modo estrito, e vamos usá-lo ao longo do livro.
 * 
 * Em seguida, observe a palavra-chave const; isso configura fs para ser uma variável 
 * local com um valor constante. Uma variável declarada com const deve receber um valor
 * quando declarado, e nunca pode ter nada atribuído a ele novamente 
 * (o que seria causar um erro de tempo de execução).
 * Pode surpreendê-lo, mas na maioria das vezes, na maioria dos códigos, variáveis não
 * precisam ser reatribuídas, tornando const uma boa escolha padrão para declarar variáveis.
 * A alternativa para const é let, que discutiremos em breve.
 * 
 * A função require () puxa um módulo Node.js e o retorna. No nosso caso, estamos 
 * chamando de require ('fs') para incorporar o módulo de sistema de arquivos integrado
 * do Node.js. No Node.js, um módulo é um bit autocontido de JavaScript que fornece 
 * funcionalidade para ser usado em outro lugar.
 * A saída de require () é geralmente um simples e antigo Objeto JavaScript, mas também 
 * pode ser uma função. Módulos podem depender de outros módulos, bem como bibliotecas em
 * outros ambientes de programação, que import ou #include outras bibliotecas.
 * 
 * Em seguida, chamamos o método watch () do módulo fs, que leva um caminho para um arquivo
 * e uma função de retorno de chamada para invocar sempre que o arquivo for alterado. 
 * Em JavaScript, funções são cidadãos de primeira classe. Isso significa que eles podem ser
 * atribuídos a variáveis e passados como parâmetros para outras funções. 
 * Dê uma olhada em nosso retorno de chamada função(callback):
 * 
 * () => console.log ('Arquivo alterado!')
 * 
 * Esta é uma expressão de função de seta(arrow function), às vezes chamada de 
 * função de seta grande(fat arrow function) ou apenas uma função de seta(arrow function). 
 * O par vazio de parênteses () no início significa que esta função não espera argumentos. 
 * Então, o corpo da função usa console.log () para ecoar uma mensagem na saída padrão. 
 * As funções de seta são novas no ECMAScript 2015 e você escreverá muitas tais funções ao 
 * longo deste livro. Antes da introdução da seta funções, você teria fornecido um retorno 
 * de chamada usando a função mais detalhada () {} construção:
 * 
 * function () {
 *    console.log ('Arquivo alterado!');
 * }
 * 
 * Além de ter uma sintaxe mais concisa do que as expressões de função mais antigas, 
 * a seta funções têm outra grande vantagem sobre suas contrapartes ancestrais:
 *  elas não criam um novo escopo para isso. Lidar com isso tem sido um espinho no 
 * lado de muitos desenvolvedores de JavaScript ao longo dos anos, mas graças a arrow
 * funções, não é mais uma grande fonte de consternação. Assim como const deveria
 * ser o seu meio de declarar variáveis, as funções de seta devem ser a sua primeira 
 * escolha na declaração de expressões de função (como retornos de chamada(callbacks)).
 * 
 * A última linha do programa apenas informa que está tudo pronto.
 * Vamos Experimente! 
 * Volte para a linha de comando e inicie o programa watcher.js usando o node, assim:
 * 
 * $ node watcher.js
 * Agora observando target.txt para alterações ...
 * Now watching target.txt for changes...
 * 
 * Depois que o programa é iniciado, o Node.js esperará pacientemente até que o arquivo
 * de destino seja mudado. Para acionar uma mudança, abra outro terminal no mesmo diretório
 * e toque no arquivo novamente. O terminal executando watcher.js produzirá a string
 * Arquivo alterado!(File changed!) E, em seguida, o programa voltará a esperar.
 * 
 * Se você ver mensagens duplicadas, especialmente no Mac OS X ou Windows, este é não é um
 * bug em seu código! Existem vários problemas conhecidos em torno disso, e muitos têm a ver
 * com a forma como a superfície do sistema operacional muda.
 * Uma vez que você tocará(touch) muito no arquivo de destino neste capítulo para acionar mudanças,
 * você pode querer usar o comando watch para fazer isso automaticamente:
 * 
 * $ watch -n 1 touch target.txt
 * Este comando tocará no arquivo de destino uma vez a cada segundo até que você o interrompa.
 * Se você estiver em um sistema que não possui o comando watch, não se preocupe. 
 * Algum meios de escrever em target.txt estão bem (echo, >target.txt).
 * 
*/

