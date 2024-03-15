

const Banner = () => {
    return (
        <div>
            <div className="hero  h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/syfXbfZ/banner1.webp)' }}>
                <div className="hero-overlay bg-[rgb(21 16 32 / 37%)] "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-2/3">
                        <h1 className="mb-5 text-4xl leading-[60px] font-bold">Experience the Joy of Cooking Classes Crafted to Your Preferences!</h1>
                        <p className="mb-5 text-md">Welcome to Flavor Factory, where taste takes center stage. Explore our diverse menu crafted with passion. Join us for a culinary experience you won't forget.</p>

                        <button className="btn btn-success rounded-full mr-3">Explore Now</button>
                        <button className="btn btn-outline border border-white text-white rounded-full ml-3">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;