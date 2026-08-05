import { VehicleSelector } from '@/components/VehicleSelector';
import { Contact, Footer } from '@/components/Contact';

export default function VehiclesPage() {
  return (
    <main className="bg-[#08080f] pt-20">
      <VehicleSelector />
      <Contact />
      <Footer />
    </main>
  );
}
