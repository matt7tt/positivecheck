'use client';

import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

interface FormData {
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
  clientSecret?: string;
}

interface PaymentFormProps {
  onBack: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setErrorMessage: (message: string | null) => void;
  formData: FormData;
}

interface PaymentError {
  message: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onBack, isLoading, setIsLoading, setErrorMessage, formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState(formData.clientSecret || "");

  useEffect(() => {
    if (!clientSecret) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/create-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          } else {
            setErrorMessage("Error: Could not fetch clientSecret.");
          }
        })
        .catch(() => {
          setErrorMessage("Error: Failed to load payment details.");
        });
    }
  }, [formData, clientSecret]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || isSubmitting) {
      return;
    }

    setIsSubmitting(true); // ✅ Disable submit button immediately
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/my-account`,
        },
      });

      // const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(PaymentElement)!,
      //     billing_details: {
      //       name: `${formData.accountFirstName} ${formData.accountLastName}`,
      //       email: formData.accountEmail,
      //     },
      //   },
      // });
    



      if (error) throw new Error(error.message);

      toast.success("Payment successful! Redirecting...");
      router.push("/my-account");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      toast.error(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsLoading(false);
      setIsSubmitting(false); // ✅ Re-enable submit button after request finishes
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#1a2642]">
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Price Section */}
          <div className="mb-4 p-4 bg-white rounded-lg border border-gray-300">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">Total Price:</span>
              <span className="text-lg font-bold text-[#1a2642]">${formData.amount.toFixed(2) || "0.00"}</span>
            </div>
          </div>

          {/* PaymentElement (Replaces CardElement) */}
          {clientSecret && <PaymentElement />}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" onClick={onBack} variant="outline" disabled={isSubmitting}>
          Back
        </Button>
        <Button
          type="submit"
          className="bg-[#1a2642] hover:bg-[#2a3752] text-white"
          disabled={!stripe || isSubmitting} // ✅ Prevent double submission
        >
          {isSubmitting ? "Processing..." : `Submit`}
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
