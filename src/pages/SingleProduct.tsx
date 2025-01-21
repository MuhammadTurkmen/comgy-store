import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from "@/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductAmount, SelectProductColor } from "@/components";
import { type LoaderFunction } from "react-router-dom";

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );
  return { ...response.data };
};

function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    console.log("add to cart");
  };
  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant={"link"} size={"sm"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant={"link"} size={"sm"}>
          <Link to={"/products"}>Product</Link>
        </Button>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST CAL */}

        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;
