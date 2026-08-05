import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { ChatButton } from '@/components/ChatButton';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import VehiclesPage from '@/pages/VehiclesPage';
import GalleryPage from '@/pages/GalleryPage';
import PricingPage from '@/pages/PricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#08080f] text-neutral-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <ChatButton />
      </div>
    </BrowserRouter>
  );
}
