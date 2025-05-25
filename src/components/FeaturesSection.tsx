import Icon from "@/components/ui/icon";
import { features } from "@/constants/data";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-thin text-gray-900 mb-4">
            Преимущества
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-4 ${feature.colorClass} rounded-full flex items-center justify-center`}
              >
                <Icon
                  name={feature.icon as any}
                  className={feature.colorClass.split(" ")[1]}
                  size={32}
                  fallback="CircleAlert"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
