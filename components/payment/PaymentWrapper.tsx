import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

interface PaymentWrapperProps {
  onBack: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setErrorMessage: (message: string | null) => void;
  formData: {
    accountEmail: string;
    accountFirstName: string;
    accountLastName: string;
    accountPhone: string;
    timezone: string;
    callTime: string;
    callDays: string[];
    accountPassword: string;
    firstName: string;
    lastName: string;
    preferredName: string;
    phone: string;
    language: string;
    questions: { id: number; selected: boolean }[];
    priceId: string;
    amount: number;
    clientSecret?: string | null;
  };
}

const PaymentWrapper: React.FC<PaymentWrapperProps> = ({ formData, onBack, isLoading, setIsLoading, setErrorMessage }) => {
  const [clientSecret, setClientSecret] = useState<string | null>(formData.clientSecret || null);
  const [loadingClientSecret, setLoadingClientSecret] = useState(true); // New state to track loading

  useEffect(() => {
    if (!clientSecret) {
      setLoadingClientSecret(true);
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify({
          email: formData.accountEmail,
          first_name: formData.accountFirstName,
          last_name: formData.accountLastName,
          phone: `+1${formData.accountPhone.replace(/\D/g, "")}`,
          timezone: formData.timezone,
          call_time: formData.callTime,
          days_to_call: formData.callDays,
          password: formData.accountPassword,
          caller_first_name: formData.firstName,
          caller_last_name: formData.lastName,
          caller_preferred_name: formData.preferredName,
          caller_phone: `+1${formData.phone.replace(/\D/g, "")}`,
          caller_language: formData.language,
          questions: formData.questions.filter(q => q.selected).map(q => q.id),
          price_id: formData.priceId,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          } else {
            setErrorMessage("Error: Could not fetch clientSecret.");
          }
        })
        .catch(() => {
          setErrorMessage("Error: Failed to load payment details.");
        })
        .finally(() => {
          setLoadingClientSecret(false);
        });
    } else {
      setLoadingClientSecret(false);
    }
  }, [clientSecret, formData, setErrorMessage]);

  if (loadingClientSecret) {
    return <p className="text-center text-gray-600">Loading payment details...</p>;
  }

  if (!clientSecret) {
    return <p className="text-center text-red-500">Error loading payment details. Please refresh the page.</p>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm
        formData={{ ...formData, clientSecret }}
        onBack={onBack}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setErrorMessage={setErrorMessage}
      />
    </Elements>
  );
};

export default PaymentWrapper;
