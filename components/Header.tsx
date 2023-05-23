import Image from 'next/image';

const Header = () => {
    return (
        <header className="py-3 px-6 sm:px-12">
            <div className="container flex">
                <div className="mb-4 sm:mb-0">
                    <Image
                        src="/images/logo-without-bg.png"
                        height={64}
                        width={64}
                        alt="schedapp"
                    />
                </div>
                <div className="ml-0 sm:ml-2">
                    <h1 className="text-2xl sm:text-3xl font-bold mt-2">{process.env.BUSINESS_NAME}</h1>
                    <p className="text-sm sm:text-base">{process.env.BUSINESS_DESCRIPTION}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;