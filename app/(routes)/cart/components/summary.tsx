import { X } from "lucide-react";
import React, { useState, useEffect, SyntheticEvent } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import creditCardType from "credit-card-type";
import { Loader } from "@/components/ui/loader";

const Summary = () => {
  const [formData, setFormData] = useState({
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    aptSuite: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    continueAsGuest: false,
    acceptTerms: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [cardError, setCardError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const steps = ["Personal Details", "Credit Card Details"];

  const [isCardValid, setIsCardValid] = useState(false);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    const cardType = creditCardType(value)[0]?.type;
    const allowedCardTypes = [
      "american-express",
      "visa",
      "mastercard",
      "discover",
    ];
    const isAllowedCardType = allowedCardTypes.includes(cardType);

    setIsCardValid(isAllowedCardType);

    if (!isAllowedCardType) {
      setCardError(
        "This card type is not supported. Please use American Express, Visa, Mastercard, or Discover."
      );
    } else {
      setCardError("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onCheckout = () => {
    setCurrentStep(0);
    setShowModal(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (currentStep === steps.length - 1) {
      if (formData.continueAsGuest && formData.acceptTerms) {
        setShowModal(false);
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
            {
              productIds: items.map((item) => item.id),
              formData,
            }
          );

          if (response) {
            toast.success("Purchase Successfull");
            removeAll();
          }
          console.log(response);
        } catch (error) {
          console.error("Error processing checkout:", error);
          toast.error("Error processing checkout.");
        } finally {
          setIsLoading(false);
        }
      }
    } else {
      nextStep();
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item?.price);
  }, 0);

  const isPersonalDetailsFilled =
    formData.firstName.length > 0 &&
    formData.lastName.length > 0 &&
    formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
    formData.address &&
    formData.zipCode &&
    formData.phone.match(/^\d{10}$/);

  const isCreditCardDetailsFilled =
    formData.cardNumber.length >= 16 &&
    formData.cvv.length <= 3 &&
    formData.expirationDate.length <= 6 &&
    isCardValid;

  const isCheckboxChecked = formData.continueAsGuest && formData.acceptTerms;

  const isNextButtonDisabled =
    currentStep === 0 && (!isPersonalDetailsFilled || !isCheckboxChecked);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0 || isLoading}
        className="w-full mt-6 flex items-center justify-center"
      >
        {isLoading ? <Loader /> : "Checkout"}
      </Button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm overflow-y-auto p-10">
          <div className="bg-white p-6 max-w-md rounded-lg shadow-lg">
            <div className="flex justify-between w-full max-md:mt-10">
              <h2 className="text-xl font-bold mb-4">Checkout</h2>
              <X onClick={handleClose} className="h-7 w-6 text-black" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {currentStep === 0 && (
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <select
                    name="country"
                    value="United States"
                    disabled
                    className="p-2 border border-gray-300 rounded w-full"
                  >
                    <option value="United States">United States</option>
                  </select>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      required
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      required
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="aptSuite"
                    value={formData.aptSuite}
                    onChange={handleInputChange}
                    placeholder="Apartment Suite (optional)"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                      required
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="continueAsGuest"
                        checked={formData.continueAsGuest}
                        onChange={handleInputChange}
                        className="form-checkbox appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-[#FB6D11] checked:border-transparent focus:outline-none"
                      />
                      <span className="text-sm ml-2 font-medium">
                        Continue as Guest
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        className="form-checkbox appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-[#FB6D11] checked:border-transparent focus:outline-none"
                      />
                      <span className="text-sm ml-2 font-medium text-blue-600">
                        <a href="/terms" target="_blank">
                          Terms and Conditions
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              )}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <Cards
                    number={formData.cardNumber}
                    name={`${formData.firstName} ${formData.lastName}`}
                    expiry={formData.expirationDate}
                    cvc={formData.cvv}
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardInputChange}
                    placeholder="Credit Card Number"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                    placeholder="Expiration Date"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  {cardError && (
                    <div className="text-red-500 font-semibold">
                      {cardError}
                    </div>
                  )}
                </div>
              )}
              <div className="flex flex-col justify-between mt-6 w-[100%] gap-5">
                {currentStep > 0 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    className="bg-[#FB6D11] text-white hover:bg-black rounded-full w-full"
                  >
                    Previous
                  </Button>
                )}

                <Button
                  className={`w-full bg-[#FB6D11] text-white hover:bg-black rounded-full ${
                    currentStep === 1 && "hidden"
                  }`}
                  type="button"
                  onClick={() => {
                    if (currentStep === 0 && !isPersonalDetailsFilled) {
                      return;
                    }
                    nextStep();
                  }}
                  disabled={isNextButtonDisabled}
                >
                  Next
                </Button>
                {currentStep === steps.length - 1 &&
                  isCreditCardDetailsFilled && (
                    <Button
                      type="submit"
                      className="w-full bg-[#FB6D11] text-white hover:bg-black rounded-full"
                      disabled={!isCreditCardDetailsFilled}
                    >
                      Checkout
                    </Button>
                  )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
