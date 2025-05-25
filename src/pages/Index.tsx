import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const giftCards = [
    {
      amount: 1000,
      description: "Идеально для покупки приложений и музыки",
      popular: false,
    },
    {
      amount: 2500,
      description: "Отличный выбор для игр и подписок",
      popular: true,
    },
    {
      amount: 5000,
      description: "Максимум возможностей App Store",
      popular: false,
    },
  ];

  const instructions = [
    {
      step: 1,
      title: "Выберите номинал",
      description:
        "Подберите подходящий номинал Gift карты из доступных вариантов",
    },
    {
      step: 2,
      title: "Оформите заказ",
      description: "Укажите email для получения кода активации карты",
    },
    {
      step: 3,
      title: "Получите код",
      description: "Код придет на указанный email в течение нескольких минут",
    },
    {
      step: 4,
      title: "Активируйте",
      description: "Введите код в App Store, iTunes или Apple Music",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              name="Apple"
              className="text-gray-900"
              size={24}
              fallback="CircleAlert"
            />
            <span className="text-xl font-semibold text-gray-900">
              Gift Cards
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#cards" className="hover:text-gray-900 transition-colors">
              Карты
            </a>
            <a
              href="#instructions"
              className="hover:text-gray-900 transition-colors"
            >
              Инструкции
            </a>
            <a
              href="#support"
              className="hover:text-gray-900 transition-colors"
            >
              Поддержка
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-thin text-gray-900 mb-6 leading-tight">
            Apple Gift Card
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Универсальная gift карта для покупок в App Store, iTunes Store,
            Apple Music и других сервисах Apple
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
          >
            Выбрать карту
          </Button>
        </div>
      </section>

      {/* Gift Cards Section */}
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

      {/* Instructions Section */}
      <section id="instructions" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-gray-600">
              Простые шаги для получения Apple Gift карты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructions.map((instruction) => (
              <div key={instruction.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                  {instruction.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {instruction.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {instruction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-gray-900 mb-4">
              Преимущества
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Icon
                  name="Shield"
                  className="text-green-600"
                  size={32}
                  fallback="CircleAlert"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Безопасность
              </h3>
              <p className="text-gray-600">
                Официальные коды активации от Apple
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon
                  name="Zap"
                  className="text-blue-600"
                  size={32}
                  fallback="CircleAlert"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Мгновенно
              </h3>
              <p className="text-gray-600">Получение кода в течение 5 минут</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon
                  name="Globe"
                  className="text-purple-600"
                  size={32}
                  fallback="CircleAlert"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Универсальность
              </h3>
              <p className="text-gray-600">Работает во всех сервисах Apple</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon
              name="Apple"
              className="text-gray-600"
              size={20}
              fallback="CircleAlert"
            />
            <span className="text-gray-600">Apple Gift Cards</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Apple Gift Cards. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
