

const Banner = () => {
    return (
        <div>
            <div className="hero  md:h-[450px] h-full" style={{ backgroundImage: 'url(https://i.ibb.co/ctrvnwG/istockphoto-613666608-170667a.webp)' }}>
                <div className="hero-overlay bg-[rgb(21 16 32 / 37%)] "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:w-2/3">
                        <h1 className="mb-5 md:text-4xl text-2xl md:leading-[60px] font-bold">Experience the Joy of Cooking Classes Crafted to Your Preferences!</h1>
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