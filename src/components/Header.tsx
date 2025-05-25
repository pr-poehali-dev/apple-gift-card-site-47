import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
          <a href="#support" className="hover:text-gray-900 transition-colors">
            Поддержка
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
