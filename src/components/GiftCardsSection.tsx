import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { giftCards } from "@/constants/data";

const GiftCardsSection = () => {
  return (
    <section id="cards" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-thin text-gray-900 mb-4">
            Выберите номинал
          </h2>
          <p className="text-lg text-gray-600">
            Доступные варианты Apple Gift карт
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {giftCards.map((card) => (
            <Card
              key={card.amount}
              className={`relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${card.popular ? "ring-2 ring-blue-600" : ""}`}
            >
              {card.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Icon
                    name="Gift"
                    className="text-white"
                    size={32}
                    fallback="CircleAlert"
                  />
                </div>
                <CardTitle className="text-3xl font-light text-gray-900">
                  {card.amount.toLocaleString()}₽
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <Button
                  className={`w-full rounded-full ${card.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                >
                  Купить сейчас
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftCardsSection;
