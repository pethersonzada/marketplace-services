import "../../styles/footer.css";

export default function Footer() {
    return <footer className = "footer">
        <img className = "imagem-logo" src="/logo/logo-branca.png" alt="" />
        <img className = "footer-redes-sociais" src="/logo/redes-sociais.png" alt="redes-sociais" /> 

        <ul className = "menu-list-footer">
            <li>Home</li>
            <li>About</li>
            <li>Help</li>
            <li>Team</li>
            <li>Contact</li>
        </ul>

        <p className = "footer-rights" >©2025 | Marketplace Services | Todos os direitos reservados</p>


    </footer>;
}