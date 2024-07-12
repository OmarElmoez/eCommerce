import axios from "axios";
import { useState } from "react";

type TStatus = 'idle' | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
  const [emailStatus, setEmailStatus] = useState<TStatus>("idle");

  const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setEnteredEmail(email);
    setEmailStatus("checking");

    try {
      const response = await axios.get('/users?email=' + email);
      if (!response.data.length) {
        setEmailStatus("available");
      } else {
        setEmailStatus("notAvailable");
      }
    } catch (error) {
      setEmailStatus("failed");
    }

  }

  return {
    emailStatus,
    enteredEmail,
    checkEmailAvailability
  }
};

export default useCheckEmailAvailability

/*
  --- Steps to create this hook ---
  1. Hanlde its status => (type, place I use to store it)
  2. Create place to store the entered email.
  3. Create a function to check email availability
*/