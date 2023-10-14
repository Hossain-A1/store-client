import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Nur | cart",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
    {children}
    </div>
  );
}