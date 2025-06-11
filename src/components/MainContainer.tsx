import type { ReactNode } from "react";

interface MainContainerType {
  children: ReactNode;
}

export default function MainContainer({ children }: MainContainerType) {
  return <div className="mx-auto h-screen max-w-xl">{children}</div>;
}
