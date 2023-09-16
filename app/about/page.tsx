import React from 'react'

const About = () => {
    return (
        <div className='max-w-7xl my-10 mx-auto max-2xl:mx-5'>
            <h1 className="max-sm:text-lg max-md:text-2xl max-lg:text-4xl text-5xl font-bold text-center mb-10">Our <span className="text-[#FB6D11]">Story</span></h1>
            <section className="mb-5">
                <p className="max-md:text-sm text-lg text-gray-500">
                    A&A Phones Services LLC is the digital footprint of DirectPromotion & leading reCommerce company that sells pre-owned
                    consumer electronics. We then
                    inspect, certify and sell them to consumers looking for a cost-effective
                    way to stay connected. A&A Phones Services LLC is simple, convenient, and it works for
                    everyone.
                </p>
                <br />
                <p className="max-md:text-sm text-lg text-gray-500">
                    The A&A Phones Services LLC story began with the realization that if you can trade in a
                    used car, you should be able to trade in a used phone. A new business,
                    and a new way to reuse consumer electronics, was born.
                </p>
                <br />
                <p className="max-md:text-sm text-lg text-gray-500">
                    A&A Phones Services LLC opened its doors in 2007 and began pioneering the idea of
                    reCommerce. We launched A&A Phones Services LLC.com in 2008 offering a simple online
                    trade-in service with instant quotes and free shipping, and things
                    really began to take off. In 2014, we launched a store to sell certified
                    pre-owned devices, giving consumers a great alternative to buying new
                    smart devices.
                </p>
                <br />
                <p className="max-md:text-sm text-lg text-gray-500">
                    Today, A&A Phones Services LLC is a flourishing e-commerce business and the nation's
                    leading consumer electronics trade-in site for buying and selling
                    certified pre-owned devices. We work hand-in-hand with our customers to
                    ensure positive outcomes in every part of the consumer electronics life
                    cycle.
                </p>
                <div className="flex gap-5 mt-10 max-md:flex-col justify-center items-center">
                    <div>
                        <img
                            src="/buy.jpg"
                            alt="buy"
                        />
                    </div>
                    <div>
                        <h1 className="max-sm:text-lg text-2xl font-bold text-center mb-5">Buy Products in <span className="text-[#FB6D11]">Volume</span> </h1>
                        <p className="max-md:text-sm text-lg text-gray-500">
                            Interested in buying or selling high-end smartphones, laptops, or
                            tablets in bulk? We're ready to help!
                        </p>
                    </div>

                </div>
                <div className="flex gap-5 mt-10 max-md:flex-col justify-center items-center">
                    <div>
                        <img
                            src="/the-horn.jpg"
                            alt="the horn"
                        />
                    </div>
                    <div>
                        <h1 className="max-sm:text-lg text-2xl font-bold text-center mb-5">The <span className='text-[#FB6D11]'>Horn</span></h1>
                        <p className="max-md:text-sm text-lg text-gray-500">
                            Interested in buying or selling high-end smartphones, laptops, or
                            tablets in bulk? We're ready to help!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About