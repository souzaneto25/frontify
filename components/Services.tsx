import React from 'react';

const Services = () => {
  return (
    <section className="py-6 px-4 sm:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-4 bg-purpleDark rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-center">Instalação de Painéis Solares</h3>
            <p className="mt-2 text-sm sm:text-base">Transforme a energia solar em eletricidade limpa e sustentável com a instalação de painéis solares em sua residência ou empresa.</p>
          </div>
          <div className="p-4 bg-purpleDark rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-center">Monitoramento Inteligente</h3>
            <p className="mt-2 text-sm sm:text-base">Tenha acesso em tempo real ao desempenho dos seus painéis solares e monitore o consumo de energia de forma eficiente.</p>
          </div>
          <div className="p-4 bg-purpleDark rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-center">Sistema de Armazenamento de Energia</h3>
            <p className="mt-2 text-sm sm:text-base">Armazene o excesso de energia gerada pelos seus painéis solares e utilize-a quando necessário, reduzindo sua dependência da rede elétrica.</p>
          </div>
          <div className="p-4 bg-purpleDark rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-center">Consultoria em Eficiência Energética</h3>
            <p className="mt-2 text-sm sm:text-base">Identificamos oportunidades para otimizar o consumo de energia em sua residência ou empresa, reduzindo custos e promovendo a sustentabilidade.</p>
          </div>
          <div className="p-4 bg-purpleDark rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-center">Manutenção e Suporte Técnico</h3>
            <p className="mt-2 text-sm sm:text-base">Oferecemos serviços de manutenção preventiva e corretiva, garantindo o bom funcionamento dos sistemas de energia solar e suporte técnico especializado.</p>
          </div>
          <div className="p-4 bg-purpleDark rounded-xl">
            <h3 className="text-lg sm:text-xl font-semibold text-center">Financiamento e Incentivos Fiscais</h3>
            <p className="mt-2 text-sm sm:text-base">Ajudamos você a explorar opções de financiamento e incentivos fiscais disponíveis para tornar a energia solar mais acessível e econômica.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;