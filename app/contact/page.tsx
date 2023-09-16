import { DollarSign, Globe, MapPin, Phone } from "lucide-react"

const Contact = () => {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <div className="flex justify-center items-center relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-black">
                    <h1 className="text-white max-md:text-2xl max-lg:text-3xl text-4xl font-bold"> Contact <span className="text-[#FB6D11]"> Us </span></h1>
                </div>
                <div className="container px-6 md:px-12">
                    <div
                        className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                        <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <Globe className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-white font-bold text-lg">Unites States</h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <MapPin className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-white font-bold text-lg">New York</h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <Phone className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-white font-bold text-lg">+92 000-000-000</h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <DollarSign className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-white font-bold text-lg">Tax ID: 273 384
                                </h6>
                            </div>
                        </div>
                        <div className="mx-auto max-w-[700px]">
                            <form>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text"
                                        className="block min-h-[auto] w-full rounded-md bg-transparent py-[0.32rem] px-3 border border-solid border-white text-white outline-none"
                                        placeholder="Name" />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email"
                                        className="block min-h-[auto] w-full rounded-md bg-transparent py-[0.32rem] px-3 border border-solid border-white text-white outline-none" placeholder="Email address" />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        className="block min-h-[auto] w-full rounded-md bg-transparent py-[0.32rem] px-3 border border-solid border-white text-white outline-none"
                                        rows={3} placeholder="Your message"></textarea>
                                </div>
                                <button type="button"
                                    className="font-bold w-full text-center bg-white hover:bg-[#FB6D11] hover:text-white rounded-lg p-3">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Contact