import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd locale="es" />
      <LandingPage locale="es" />
    </>
  );
}
