import OffersTopSection from "./components/OffersTopSection";
import OffersContent from "./components/OffersContent";
import OffersExtras from "./components/OffersExtras";
import BottomNav from "./components/BottomNav";

export default function OffersPage() {
  return (
    <main className="pb-30 bg-white min-h-screen">
      <OffersTopSection />
      <OffersContent />
      <OffersExtras />
      <BottomNav />
    </main>
  );
}
