import { useState } from "react";

export const UnforgivingSelector = () => {
  const [size, setSize] = useState<number>(1);

  const increaseSize = () => {
    const newSize = size + 1;
    setSize(newSize)
  };

  return (
    null
  )
}
