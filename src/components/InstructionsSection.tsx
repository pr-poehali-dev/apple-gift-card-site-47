import { instructions } from "@/constants/data";

const InstructionsSection = () => {
  return (
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
  );
};

export default InstructionsSection;
