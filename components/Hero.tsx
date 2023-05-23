import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="py-12 px-4 sm:px-12">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-col justify-center text-center sm:text-left sm:mr-8">
                    <div className="mb-8">
                        <ul>
                            <li className="text-4xl sm:text-8xl font-bold">Inovação</li>
                            <li className="text-4xl sm:text-8xl font-bold">Eficiência</li>
                            <li className="text-4xl sm:text-8xl font-bold">Solução</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold">Nós transformamos a maneira como você aproveita a energia do sol.</h2>
                        <p className="text-base sm:text-lg font-bold">Com uma abordagem sustentável e voltada para o futuro, oferecemos uma solução completa em energia solar.</p>
                    </div>
                    <div>
                        <button className="bg-purpleDark font-bold py-4 px-6 rounded-3xl mt-8">
                            Entrar em contato
                        </button>
                    </div>
                </div>
                <div className="rounded-full overflow-hidden mt-8 sm:mt-0">
                    <Image
                        src="/images/heropage.jpeg"
                        alt="Hero Image"
                        width={400}
                        height={400}
                        priority={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;