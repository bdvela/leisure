import heroImage from '../assets/hero.jpg';

const Hero = () => {
    return (
        <a href="https://docdro.id/oMYtU2C" target="blank">
            <div
                className={`hero mb-5 h-96 bg-cover bg-center transition duration-300 ease-in-out transform hover:opacity-70`}
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Bienvenido a Leisure</h1>
                        <p className="mb-5"></p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Hero;
