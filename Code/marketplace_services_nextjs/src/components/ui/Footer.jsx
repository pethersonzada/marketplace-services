import "../../styles/footer.css";

export default function Footer() {
    return <footer className = "footer">
        <img className = "imagem-logo" src="/logo/logo-branca.png" alt="" />
        <img className = "footer-redes-sociais" src="/logo/redes-sociais.png" alt="redes-sociais" /> 

        <ul className = "menu-list-footer">
            <li><a href="/home">Home</a></li>
            <li><a href="https://github.com/pethersonzada/marketplace-services/graphs/contributors">Team</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="https://github.com/pethersonzada/marketplace-services">About</a></li>
            <li><a href="mailto:pethersonzada@gmail.com">Contact</a></li>
        </ul>

        <p className = "footer-rights" >©2025 | Marketplace Services | Todos os direitos reservados</p>


    </footer>;
}