import '@/styles/orderSummary.css';
import Image from 'next/image';
export default function orderSummary(){
    return (
        <div className='caixa-resumo_de_pedido'>
            <h2 className='titulo'>Resumo do pedido</h2>
            <hr className='linha_divisoria'/>

            <div className='pedido'>

                <div className='produto'>
                    
                    <Image 
                        className='foto' 
                        src="/icons/kit-limpeza.png" 
                        alt="Kit de Limpeza"
                        width={100}
                        height={100}
                        priority
                    />
                    
                    <div className='detalhes'>
                        <div className='linha-info'>
                            
                        <h3 className='nome_servico'>Serviço de Limpeza</h3>
                        <span className='preco'>R$79,99</span>
                        </div>

                        <div className='descricao_qtd'>

                        <p className='descricao'>Limpeza Geral + Vidros</p>
                        <span className='qtd'>Qtd: 1</span>
                        </div>
                    </div>
                
                </div>

                {/*parte dos cupoms */}
                <hr className='linha_divisoria'/>  
                <div className='cupom'>
                    <input type="text" id='cupom' placeholder='Cupom de desconto' />
                    <button className='aplicar'>aplicar</button>
                </div>
                <hr className='linha_divisoria'/>

                {/* subtotal e deslocamento */}
                <div className='resumo'>
                    <div className='subtotal_valor'>
                        <h4 className='subtotal'>Subtotal</h4>
                        <p className='valor'>R$79,99</p>
                    </div>
                    <div className='subtotal_valor'>
                        <p className='deslocamento'>Deslocamento</p>
                        <p className='valor_d'>RS7,24</p>
                    </div>
                </div>
                <hr className='linha_divisoria'/>
                
                    <div className='total_preco'>

                        <p className='total'>Total</p>

                    </div>
                    <div className='taxa_preco'>
                        <p className='taxa'>Incluindo R$6,21 em taxas</p>

                        <p className='preco_t'>R$93,44</p>

                    </div>

            </div>

        </div>
    );

    

}