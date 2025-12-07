import '@/styles/orderSummary.css';


export default function OrderSummary(){
    return (
        <div className='caixa-resumo_de_pedido'>
            <h2 className='titulo'>Resumo do pedido</h2>
            <hr className='linha_divisoria'/>

            <div className='pedido'>

                <div className='produto'>
                    
                    
                    
                    <div className='detalhes'>
                        <div className='linha-info'>
                            
                        <h3 className='nome_servico'>Serviço de Limpeza</h3>
                        <span className='preco'>R$79,99</span>
                        </div>

                        
                    </div>
                
                </div>  

                <div className='resumo'>
                    <div className='subtotal_valor'>
                        <p className='deslocamento'>Deslocamento</p>
                        <p className='valor_d'>R$7,24</p>
                        
                    </div>
                    <div className='taxa_valor'>
                        <p className='taxa'>Taxas</p>
                        <p className='valor_d'>R$6,21</p>
                        
                    </div>
                </div>
                <hr className='linha_divisoria'/>
                
                <div className='total_preco'>

                    <p className='total'>Total</p>
                    <p className='preco_t'>R$93,44</p>

                </div>
                    
            </div>

        </div>
    );

    

}