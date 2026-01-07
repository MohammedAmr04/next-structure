"use client";

import { Button } from "../ui/button";

export default function CustomButton({
  ...props
}: React.ComponentProps<typeof Button>) {
  return <Button {...props}>{props.children}</Button>;
}
