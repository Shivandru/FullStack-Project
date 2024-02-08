import React from "react";
import { useCart } from "react-use-cart";
import { MinusIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Button } from "@chakra-ui/react";
export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty) return <p>0</p>;
  return (
    <>
      <h1>({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <Flex key={item.id}>
            {item.quantity} {item.name}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              <MinusIcon />
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              <AddIcon />
            </button>
            <button onClick={() => removeItem(item.id)}>
              <CloseIcon />
            </button>
          </Flex>
        ))}
      </ul>
    </>
  );
}
