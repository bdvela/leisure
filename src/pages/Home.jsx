import Card from '../components/Card';
import Hero from '../components/Hero';
const Home = () => {
    const dashboard = [
        {
            title: 'Ganancia del Mes',
            description: '1200',
            type: 'money',
        },
        {
            title: 'Personas en mi Equipo',
            description: '15',
            type: 'number',
        },
        {
            title: 'Redes Sociales',
            description: ['Facebook', 'Instagram', 'Tiktok'],
            type: 'social',
        },
    ];
    return (
        <div>
            <Hero />
            <div>
                <ul className="grid  gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dashboard.map(item => (
                        <li key={item.email}>
                            <Card title={item.title} description={item.description} type={item.type} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
