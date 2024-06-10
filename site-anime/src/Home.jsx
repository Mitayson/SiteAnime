import React from 'react';

import cadastro from'./assets/cadastro.png';
import hubFrieren from './assets/hubFrieren.png';
import semimg from './assets/semimg.png';


function Home() {
  return (
    <html>
      <body> 
        <div className="fundo"><img src={hubFrieren} alt="" /></div>
        {/* Botoes do hub */}
        <div className="botoes">
          <div className="hub"><a href="./home">Site generico</a></div>
          <div className="home"><a>Home</a></div>
          <div className="contato"><a href="./pagContato.html">Contato</a></div>
        </div>
        {/* Cadastro */}
        <div className="cadastro">
          <div>
            <a href="./Register"><img src={cadastro} alt="" /></a>
          </div>
        </div>

        {/* Principais animes */}
        <div className="fora">
          <div className="corpo">
            <div className="imagem imagem1">
              <img className="anime-top" src={semimg} alt="imagem1" />
              <h1 className="texto-sobre-imagem-h1">Sousou no Frieren</h1>
              <p className="texto-sobre-imagem-p">Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. ...</p>
              <div className="opacidade-fundo"></div>
            </div>
            <div className="imagem imagem2">
              <img className="anime-top" src={semimg}  alt="imagem2" />
              <h1 className="texto-sobre-imagem-h1">Ninja Kamui</h1>
              <p className="texto-sobre-imagem-p">Joe Higan é um Nukenin - um ex-ninja que escapou de seu clã e está se escondendo de seu passado violento na zona rural da América com ..</p>
              <div className="opacidade-fundo"></div>
            </div>
            <div className="imagem imagem3">
              <img className="anime-top" src={semimg}  alt="imagem3" />
              <h1 className="texto-sobre-imagem-h1">Solo Leveling</h1>
              <p className="texto-sobre-imagem-p">Há mais de uma década, surgiu uma misteriosa passagem chamada "portal", que conecta este mundo a uma dimensão diferente, o que ...</p>
              <div className="opacidade-fundo"></div>
            </div>
            <div className="imagem imagem4" alt="imagem4">
              <img className="anime-top" src={semimg}  alt="imagem4" />
              <h1 className="texto-sobre-imagem-h1">Jujutsu Kaisen</h1>
              <p className="texto-sobre-imagem-p">Em um mundo onde demônios se alimentam de humanos desavisados, fragmentos do lendário e temido demônio Ryoumen Sukuna foram perdidos e ...</p>
              <div className="opacidade-fundo"></div>
            </div>
            <div className="imagem imagem5" alt="imagem5">
              <img className="anime-top" src={semimg}  alt="imagem5" />
              <h1 className="texto-sobre-imagem-h1">Saijaku Tamer wa Gomi Hiroi no Tabi wo Hajimemashita</h1>
              <p className="texto-sobre-imagem-p">As estrelas representam tudo neste mundo, pois elas conferem habilidades aos Domadores. Assim, quando Ivy veio ao mundo sem uma estrela para si, ...</p>
              <div className="opacidade-fundo"></div>
            </div>
            <div className="imagem imagem6" alt="imagem6">
              <img className="anime-top" src={semimg} alt="imagem6" />
              <h1 className="texto-sobre-imagem-h1">Ragna Crimson</h1>
              <p className="texto-sobre-imagem-p">Caçadores de dragões: guerreiros equipados com armas de prata especiais que matam em busca de recompensas. Entre os mais fracos deles está Ragna, ...</p>
              <div className="opacidade-fundo"></div>
            </div>
          </div>
        </div>

        {/* Barra Ultimos lançamentos */}
        <div className="lancamento"><p>ultimos lançamentos</p></div>

        {/* Ultimos lançamentos*/}
        <div className="ultimosLancamentos">
          <div className="anime anime1">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime2">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime3">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime4">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime5">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime6">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime7">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime8">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime5">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime6">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime7">
            <img src={semimg} alt="" />
          </div>
          <div className="anime anime8">
            <img src={semimg} alt="" />
          </div>
        </div>
      </body>
    </html>
  );
}

export default Home