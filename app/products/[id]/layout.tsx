import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Nur | products",
};

export default function ProductDetailsLayout({
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