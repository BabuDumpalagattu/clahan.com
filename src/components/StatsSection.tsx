
import { Users, GraduationCap, Trophy, Building } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Students Trained",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      number: "89%",
      label: "Placement Rate",
      color: "text-green-600"
    },
    {
      icon: Trophy,
      number: "4.9/5",
      label: "Student Rating",
      color: "text-yellow-600"
    },
    {
      icon: Building,
      number: "150+",
      label: "Hiring Partners",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
