import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
