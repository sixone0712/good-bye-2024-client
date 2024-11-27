import { PropsWithChildren } from "react";

export default function MobileBaseLayout({ children }: PropsWithChildren) {
  return <div className="w-full min-h-dvh">{children}</div>;
}
