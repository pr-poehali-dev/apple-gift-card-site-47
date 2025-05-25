import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-thin text-gray-900 mb-6 leading-tight">
          Apple Gift Card
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Универсальная gift карта для покупок в App Store, iTunes Store, Apple
          Music и других сервисах Apple
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
        >
          Выбрать карту
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
