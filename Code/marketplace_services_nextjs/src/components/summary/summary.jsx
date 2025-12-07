'use client';
import { useSearchParams } from 'next/navigation';
import '@/styles/summary.css';
import Image from 'next/image';

export default function Summary() {
    const searchParams = useSearchParams();
    const metodo = searchParams.get('metodo');
    
    const parcelasParam = searchParams.get('parcelas');
    const numParcelas = parcelasParam ? Number(parcelasParam) : 1;

    const total = 93.44;

    const calcularParcela = (num) => {
        return (total / num).toFixed(2).replace('.', ',');
    };

    return(
        <div className='caixa_resumo'>
            <h1>Resumo do pedido</h1>
            <hr className='linha_divisoria'/>

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
                    <div className='linha-info'>
                        <span className='descricao'>Limpeza Geral + Vidros</span>
                        <span className='qtd'>Qtd: 1</span>
                    </div>
                </div>
            </div>

            <hr className='linha_divisoria'/>

            <div className='secao_valores'>
                <div className='linha-info'>
                    <h3 className='deslocamento'>Deslocamento</h3>
                    <span className='valor_d'>R$7,24</span>
                </div>
                <div className='linha-info'>
                    <span className='taxa'>Taxas adicionais</span>
                    <span className='valor_t'>R$6,21</span>
                </div>
            </div>
            
            <hr className='linha_divisoria'/>
            <div className='area_cupom'>
            
                <h3 className='titulo_cupom'>Cupom de desconto</h3>
                
                <div className='grupo_cupom'>
                    <input 
                        type="text" 
                        placeholder='Digite o código do cupom' 
                        className='input_estilo_pagamento'
                    />
                    <button className='botao_aplicar'>
                        Aplicar
                    </button>
                </div>

            </div>
            <hr className='linha_divisoria'/>
            
            
            {metodo === 'cartao' && (
                <div className='status_pagamento'>
                    <h2 className='forma_de_pagamento'>Detalhes do pagamento</h2>
                    
                    <div className='cartao_info_box'>
                        <div className='linha-info-pagamento'>
                            <span className='label_pagamento'>Método:</span>
                            <span className='valor_pagamento'>Cartão de Crédito</span>
                        </div>
                        
                        <div className='linha-info-pagamento'>
                            <span className='label_pagamento'>Cartão:</span>
                            <span className='valor_pagamento'>Final 1234</span>
                        </div>

                        <div className='linha-info-pagamento'>
                            <span className='label_pagamento'>Parcelamento:</span>
                            <span className='valor_pagamento'>
                                {numParcelas}x de R$ {calcularParcela(numParcelas)}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {metodo === 'pix' && (
                <div className='status_pagamento'>
                    <h2 className='forma_de_pagamento'>Detalhes do pagamento</h2>
                    
                    <div className='cartao_info_box'>
                        <div className='linha-info-pagamento'>
                            <span className='label_pagamento'>Método:</span>
                            <span className='valor_pagamento'>Pix</span>
                        </div>
                    </div>
                    <div className='cartao_info_box'>
                            <span className='pix_aprovacao'>
                             Aprovação imediata
                            </span>
                        
                    </div>

                    <p className='texto_aviso_final'>
                        O <strong>QR Code</strong> e o código Copia e Cola serão gerados na próxima tela após finalizar a compra.
                    </p>
                </div>
            )}

            {metodo === 'banco' && (
                <div className='status_pagamento'>
                    <h2 className='forma_de_pagamento'>Detalhes do pagamento</h2>
                    
                    <div className='cartao_info_box'>
                        <div className='linha-info-pagamento'>
                            <span className='label_pagamento'>Método:</span>
                            <span className='valor_pagamento'>Boleto Bancário</span>
                        </div>

                        <div className='linha-info-pagamento'>
                            <span className='label_pagamento'>Vencimento:</span>
                            <span className='valor_pagamento'>3 dias úteis</span>
                        </div>
                    </div>

                    <p className='texto_aviso_final'>
                        O boleto será gerado para impressão ou download assim que você clicar em <strong>Finalizar compra</strong>.
                    </p>
                </div>
            )}

            <hr className='linha_divisoria'/>

            <div className='linha-info'>
                <span className='total'>Total a pagar</span>
                <span className='total_valor'>R$ 93,44</span>
            </div>
        

            <hr className='linha_divisoria'/>

            <button className='botao_pagar'>Finalizar compra</button>
            <a href="/payments" className='botao_cancelar'>Voltar</a>
            
        </div>
    );
}