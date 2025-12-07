'use client';
import '../../styles/paymentsForm.css';
import { useState } from 'react';

export default function PaymentsForm(){

    const [metodo, setmetodo] = useState('cartao');
    const [SalvarDados, setSalvarDados] = useState(false);
    
    const [parcelas, setParcelas] = useState(1);
    const total = 93.44;
    const calcularParcela = (num) => {
        return (total / num).toFixed(2).replace('.', ',');
    };

    return (
        <div className='caixa-forma_de_pagamento'>
            
            <h2 className='titulo'>Forma de pagamento</h2>
            <hr className='linha-divisoria'/>
           
            <div className="pagar-com">
                <h3 className="subtitulo">Pagar com:</h3>
    
                <div className="container-opcoes">
                    <label className="opcao">
                        <input type="radio" 
                        name="metodo" 
                        checked={metodo==='cartao'}
                        onChange={()=>setmetodo('cartao')}/>
                        <span>Cartão</span>
                    </label>

                    <label className="opcao">
                        <input type="radio" 
                        name="metodo" 
                        checked={metodo==='banco'}
                        onChange={()=>setmetodo('banco')}/>
                        <span>Banco</span>
                    </label>

                    <label className="opcao">
                        <input type="radio" 
                        name="metodo"
                        checked={metodo==='pix'}
                        onChange={()=>setmetodo('pix')} />
                        <span>Pix</span>
                    </label>
                </div>
            </div>

            {metodo === 'cartao' && (
                <div className='pagamento'>
                    <h3 className='dadosCartao'>Dados do titular do cartão</h3>
                    
                    <h3 className='subtitulo'>Número do Cartão</h3>
                    <input type="text" id='numeroDeCartao' placeholder='xxxx xxxx xxxx xxxx' maxLength={16} />
                
                    <div className='venci_cvv'>
                        <div className='grupo_venci_cvv'>
                            <label htmlFor="vencimento" className='subsubtitulo'>Validade</label>
                            <input type="text" id='validade'  placeholder='MM/AA' maxLength={5} />
                        </div>
                        <div className='grupo_venci_cvv'>
                            <label htmlFor="cvv" className='subsubtitulo'>CVV</label>
                            <input type="text" id='cvv'  placeholder='1234' maxLength={4} />
                        </div>
                    </div>

                    <h3 className='subtitulo'>Nome do titular</h3>
                    <input type="text" id='nomeTitular' placeholder='Digite o nome impresso no cartão'/>

                    <h3 className='subtitulo'>E-mail</h3>
                    <input type="text" id='email' placeholder='E-mail'/>

                    <div className='cpf_data'>
                        <div className='grupo_cpf_data'>
                            <label htmlFor="cpf" className='subsubtitulo'>CPF</label>
                            <input type="text" id='cpf'  placeholder='xxx.xxx.xxx-xx' maxLength={14} />
                        </div>
                        <div className='grupo_cpf_data'>
                            <label htmlFor="dataNascimento" className='subsubtitulo'>Data de nascimento</label>
                            <input type="date" id='dataNascimento'  placeholder='DD/MM/AAAA' />
                        </div>
                    </div>

                    
                    <div className='parcelamento_container'>
                        <h3 className='subtitulo'>Parcelamento</h3>
                        <select 
                            className='input_parcelas'
                            value={parcelas}
                            onChange={(e) => setParcelas(Number(e.target.value))}
                        >
                            <option value={1}>1x de R$ {calcularParcela(1)} (Sem juros)</option>
                            <option value={2}>2x de R$ {calcularParcela(2)} (Sem juros)</option>
                            <option value={3}>3x de R$ {calcularParcela(3)} (Sem juros)</option>
                            <option value={4}>4x de R$ {calcularParcela(4)} (Sem juros)</option>
                        </select>
                    </div>
                    

                    <div className='salvar_container'>
                        <label className='checkbox_label'>
                            <input type="checkbox" checked={SalvarDados}
                            onChange={(e)=> setSalvarDados(e.target.checked)} />
                            <span>Salvar dados do cartão</span>
                        </label>
                    </div>

                <button className='botao_pagar'>Pagar</button>

                <a href="/home" className='botao_cancelar'>
                Cancelar
                </a>

                    <p className='texto_privacidade'>Suas informações pessoais serão utilizadas para processar o seu pagamento e ajudar a nossa experiência usando nosso site, e para outros propósitos descritos na nossa política de privacidade.</p>
                </div>
            )}

            {metodo === 'banco' && (
                <div className='pagamento'>
                    <h3 className='boleto'>Boleto Bancário</h3>
                    <ul className='lista_boleto'>
                        <li>Vencimento em 3 dias úteis.</li>
                        <li>Aprovação leva até 48 horas.</li>
                        <li>Pode pagar em qualquer banco ou lotérica.</li>
                        <li>Não enviamos boleto pelo correio.</li>
                    </ul>

                    <button className='botao_pagar'>Gerar boleto</button>

                   <a href="/home" className='botao_cancelar'>
                     Cancelar
                    </a>

                    <p className='texto_privacidade'>Suas informações pessoais serão utilizadas para processar o seu pagamento e ajudar a nossa experiência usando nosso site, e para outros propósitos descritos na nossa política de privacidade.</p>
                </div>
            )}

            {metodo === 'pix' && (
                <div className='pagamento'>
                    <h3 className='pix'>Pagamento via pix</h3>
                    <ul className="lista_pix"> 
                    <li>O pagamento é aprovado na hora.</li>
                    <li>O código Pix gerado tem validade de <strong>30 minutos</strong>.</li>
                    </ul>

                    <button className='botao_pagar'>Gerar código pix</button>

                    <a href="/home" className='botao_cancelar'>
                    Cancelar
                    </a>

                    <p className='texto_privacidade'>Suas informações pessoais serão utilizadas para processar o seu pagamento e ajudar a nossa experiência usando nosso site, e para outros propósitos descritos na nossa política de privacidade.</p>
                </div>
            )}
        </div>
    );
}