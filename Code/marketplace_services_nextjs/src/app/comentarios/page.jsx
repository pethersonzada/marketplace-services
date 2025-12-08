import Footer from "@/components/ui/Footer";
import "../../styles/comentarios.css";
export default function Comentarios(){
return(
    <div className="Classepai">

        <div className="Titulo">
        
            <h1>Avaliações e Imagens</h1>
        </div>

    <div className="subtitulo">
            <h2>Veja aqui as avaliações das pessoas sobre este prestador de serviços.</h2>
        </div>




<div className="comentarios">

    <div className="card-comentario">
    <h2>Mário Teixeira</h2>
    <p>
        O profissional foi pontualíssimo e demonstrou uma agilidade impressionante,
        sem perder a qualidade na faxina. O cuidado que ele teve com a organização e
        com os detalhes dos móveis superou minhas expectativas. Senti muita firmeza e
        confiança no trabalho dele; é uma pessoa muito educado e respeitoso no ambiente familiar
        O resultado final foi impecável, tudo muito limpo e cheiroso; recomendo o serviço dele de olhos fechados!"
    </p>


    <div className="fotos">
    <hr />
        <img src="servicos/foto2.jpeg" alt="" />
        <img src="servicos/foto3.jpeg" alt="" />
    </div>

    </div>
    <div className="avaliazaoFoto">
        <img src="avatar/10.png" alt="Avatar" />
    <p>
        4,4/5 ⭐
    </p>
    </div>
    

    
</div>
        
        <div className="comentarios">

    <div className="card-comentario">
    <h2>Carlos Nogueira</h2>
    <p>
O Snoop me surpreendeu positivamente! Ele tem muita força para a limpeza pesada, arrastou móveis que eu não conseguia mexer e limpou cada canto escondido. Além disso, é super educado e discreto. Minha casa nunca esteve tão brilhante."
    </p>
<br />
<br />
<br />
<br />
<div className="fotos">
    <hr />
        <img src="servicos/foto2.jpeg" alt="" />
        <img src="servicos/foto3.jpeg" alt="" />
    </div>
    </div>
    <div className="avaliazaoFoto">
        <img src="avatar/21.png" alt="Avatar" />
    <p>
        4,9/5 ⭐
    </p>
    </div>
</div>
        

        <div className="comentarios">
    <div className="card-comentario">
    <h2>Fátima Braga</h2>
    <p>
O Snoop trabalha com uma agilidade que eu nunca vi. Terminou a faxina completa antes do prazo e com um nível de detalhe excelente. Ele também teve muito cuidado com meus gatos e com a decoração da sala. Nota 10!    </p>
<br />
<br />
<br /><br /> <br />
<div className="fotos">
    <hr />
        <img src="servicos/foto2.jpeg" alt="" />
        <img src="servicos/foto3.jpeg" alt="" />
    </div>
    </div>
    <div className="avaliazaoFoto">
        <img src="avatar/17.png" alt="Avatar" />
    <p>
        4,7/5 ⭐
    </p>
    </div>
</div>

        <div className="comentarios">
    <div className="card-comentario">
    <h2>Guilherme Silva</h2>
    <p>
Quebrei qualquer preconceito que pudesse ter. O Snoop é mais caprichoso do que muitas pessoas que já contratei antes. Ele desengordurou minha cozinha inteira e deixou o banheiro parecendo de hotel. Já deixei agendado para o próximo mês.
</p>
<br /><br />
<br />
<br />
<div className="fotos">
    <hr />
        <img src="servicos/foto2.jpeg" alt="" />
        <img src="servicos/foto3.jpeg" alt="" />
    </div>
    </div>
    <div className="avaliazaoFoto">
        <img src="avatar/13.png" alt="Avatar" />
    <p>
        4,2/5 ⭐
    </p>
    </div>
</div>
<footer><Footer/></footer>
</div>
)
}