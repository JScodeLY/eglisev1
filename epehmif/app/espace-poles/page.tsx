import type { Metadata } from "next";
import PolesApp from "./PolesApp";

export const metadata: Metadata = {
  title: "Espace pôles — EPEHMIF",
  robots: { index: false, follow: false },
};

export default function EspacePolesPage() {
  return <PolesApp />;
}
