import { Parallax } from 'react-parallax';
const Cover = ({ image, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={image}
                bgImageAlt="the dog"
                strength={-200}
                className='mb-24'
            >
                <div className="hero md:h-[60vh]">
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 uppercase">
                                would you like to watch a movie now?
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;