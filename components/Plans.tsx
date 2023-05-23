import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Plans = () => {
    return (
        <section className="py-6 px-4 sm:px-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Nossos planos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Plano 1 */}
                    <div className="bg-purpleDark rounded-xl p-6 shadow flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Plano Básico</h3>
                            <ul className="mb-4 text-sm sm:text-base text-left">
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Suporte técnico até 6 meses</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Monitoramento básico do desempenho</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Manutenção preventiva anual</li>
                                </div>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blueDark py-2 px-4 rounded justify-center">Selecionar</button>
                        </div>
                    </div>

                    {/* Plano 2 */}
                    <div className="bg-purpleDark rounded-xl p-6 shadow flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Plano Premium</h3>
                            <ul className="mb-4 text-sm sm:text-base text-left">
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Suporte técnico de 1 ano</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Monitoramento avançado do desempenho</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Manutenção preventiva semestral</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Consultoria em eficiência energética</li>
                                </div>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blueDark py-2 px-4 rounded justify-center">Selecionar</button>
                        </div>
                    </div>

                    {/* Plano 3 */}
                    <div className="bg-purpleDark rounded-xl p-6 shadow flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Dimensionamento VIP</h3>
                            <ul className="mb-4 text-sm sm:text-base text-left">
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Suporte técnico 24/7 com atendimento prioritário</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Monitoramento detalhado do desempenho em tempo real</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Manutenção preventiva trimestral</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Consultoria em eficiência energética</li>
                                </div>
                                <div className="flex mb-2 gap-2">
                                    <FontAwesomeIcon icon={faCheck} width={16} className="text-blueDark" />
                                    <li>Acesso ao sistema de armazenamento de energia</li>
                                </div>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blueDark py-2 px-4 rounded justify-center">Selecionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;