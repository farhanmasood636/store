'use client';

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm: FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>(); // Added reset
    const [showSuccessModal, setShowSuccessModal] = useState(false); // Added state for modal

    function onSubmit(data: FormData) {
        sendEmail(data);
        setShowSuccessModal(true);
        reset();
    }

    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <div className="flex justify-center items-center relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-black">
                    <h1 className="text-white max-sm:text-lg max-md:text-2xl max-lg:text-4xl text-5xl font-bold text-center mb-10">
                        {" "}
                        Contact <span className="text-[#FB6D11]"> Us </span>
                    </h1>
                </div>
                <div className="container px-6 md:px-12">
                    <div className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                        <div className="mb-12 flex flex-wrap justify-between gap-x-20">
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <Globe className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-black font-bold max-sm:text-sm text-lg">
                                    United States
                                </h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <MapPin className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-black font-bold max-sm:text-sm text-lg">
                                    Baltimore, Maryland
                                </h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <Phone className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-black font-bold max-sm:text-sm text-lg">
                                    +1-779-218-8306
                                </h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <Mail className="mx-auto mb-6 h-8 w-8 text-[#FB6D11]" />
                                <h6 className="text-black font-bold max-sm:text-sm text-lg">
                                    <a href="mailto:support@directpromotion.online">
                                        support@directpromotion.online
                                    </a>{" "}
                                </h6>
                            </div>
                        </div>
                        <div className="mx-auto max-w-[700px]">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="block min-h-[auto] w-full rounded-md bg-transparent py-[0.32rem] px-3 border border-solid border-black text-black outline-none"
                                        placeholder="Name"
                                        {...register('name', { required: true })}
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="email"
                                        className="block min-h-[auto] w-full rounded-md bg-transparent py-[0.32rem] px-3 border border-solid border-black text-black outline-none"
                                        placeholder="Email address"
                                        {...register('email', { required: true })}
                                    />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        className="block min-h-[auto] w-full rounded-md bg-transparent py-[0.32rem] px-3 border border-solid border-black text-black outline-none"
                                        rows={3}
                                        placeholder="Your message"
                                        {...register('message', { required: true })}
                                    ></textarea>
                                </div>
                                <button
                                    className="font-bold w-full text-center bg-black hover:bg-[#FB6D11] hover:text-white rounded-lg p-3 text-white"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md">
                    <div className="bg-white p-10 rounded-lg shadow-2xl">
                        <h1 className="text-xl font-bold mb-5">Success</h1>
                        <p className="text-lg text-center font-light mb-5">Message sent successfully!</p>
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="mt-4 bg-[#FB6D11] text-white px-4 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ContactForm;
