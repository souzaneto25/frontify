import Image from 'next/image';
import React from 'react';

const Businesses = () => {
    return (
        <section className="py-6 px-12 sm:px-12">
            <div className="container mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Empresas que trabalham com a gente</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">                    
                    <div className="bg-purpleDark rounded-full justify-center">
                        <div className="flex gap-2 justify-start items-center">
                            <Image
                                src="/images/empresa1.jpeg"
                                height={96}
                                width={96}
                                alt="empresa1"
                                className="rounded-full"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-center">BrightHome Decor</h3>
                        </div>
                    </div>

                    <div className="bg-purpleDark rounded-full justify-center">
                        <div className="flex gap-4 justify-start items-center">
                            <Image
                                src="/images/empresa2.jpeg"
                                height={96}
                                width={96}
                                alt="empresa2"
                                className="rounded-full"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-center">GreenThumb Landscaping</h3>
                        </div>
                    </div>
                    <div className="bg-purpleDark rounded-full justify-center">
                        <div className="flex gap-4 justify-start items-center">
                            <Image
                                src="/images/empresa3.jpeg"
                                height={96}
                                width={96}
                                alt="empresa3"
                                className="rounded-full"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-center">SkyHigh Travel</h3>
                        </div>
                    </div>
                    <div className="bg-purpleDark rounded-full justify-center">
                        <div className="flex gap-4 justify-start items-center">
                            <Image
                                src="/images/empresa4.jpeg"
                                height={96}
                                width={96}
                                alt="empresa4"
                                className="rounded-full"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-center">BrightHome Decor</h3>
                        </div>
                    </div>

                    <div className="bg-purpleDark rounded-full justify-center">
                        <div className="flex gap-4 justify-start items-center">
                            <Image
                                src="/images/empresa5.jpeg"
                                height={96}
                                width={96}
                                alt="empresa5"
                                className="rounded-full"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-center">GreenThumb Landscaping</h3>
                        </div>
                    </div>
                    <div className="bg-purpleDark rounded-full justify-center">
                        <div className="flex gap-4 justify-start items-center">
                            <Image
                                src="/images/empresa6.jpeg"
                                height={96}
                                width={96}
                                alt="empresa6"
                                className="rounded-full"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold text-center">SkyHigh Travel</h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Businesses;