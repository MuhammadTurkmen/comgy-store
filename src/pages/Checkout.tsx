import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "@/components";
import { LoaderFunction, redirect } from "react-router-dom";
import { type ReduxStore } from "@/store";
import { toast } from "@/hooks/use-toast";

function Checkout() {
  const cartTotal = useAppSelector((state) => state.userState.user);
  return <div>Checkout</div>;
}
export default Checkout;
