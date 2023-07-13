import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Card = ({ title, description, type }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5 mx-auto text-center h-56">
            <div className="card-body flex items-center justify-center">
                <h2 className="card-title text-xl mb-5">{title}</h2>
                {type === 'money' && (
                    <div className="flex items-top">
                        <span className="text-3xl font-normal">S/</span>
                        <p className="text-6xl ml-1 font-medium">{description}</p>
                    </div>
                )}
                {type === 'social' && (
                    <div className="flex items-center justify-center ">
                        {description.map((social, index) => {
                            let icon = null;
                            let link = '';

                            if (social === 'Facebook') {
                                icon = <FaFacebook size={45} />;
                                link = 'https://www.facebook.com/';
                            } else if (social === 'Instagram') {
                                icon = <FaInstagram size={45} />;
                                link = 'https://www.instagram.com/';
                            } else if (social === 'Tiktok') {
                                icon = <FaTiktok size={45} />;
                                link = 'https://www.tiktok.com/';
                            }

                            return (
                                <a
                                    key={index}
                                    href={link}
                                    target="blank"
                                    className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                                >
                                    <span className="w-16">{icon}</span>
                                </a>
                            );
                        })}
                    </div>
                )}
                {type !== 'social' && type !== 'money' && <p className="text-6xl font-medium">{description}</p>}
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Card;
