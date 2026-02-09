import React from 'react';
import { Users, BadgeCheck, DollarSign, BarChart3 } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Users, label: 'Active Agents', value: '1,000+', change: '+12.5%' },
    { icon: BadgeCheck, label: 'Verified Profiles', value: '850', change: '+8.3%' },
    { icon: DollarSign, label: 'Market Cap', value: '$127.73M', change: '-8.86%' },
    { icon: BarChart3, label: '24h Volume', value: '$3.04M', change: '+15.2%' }
  ];

  return (
    <section
      id="stats"
      className="py-20 px-6 bg-gradient-to-b from-zinc-900 via-slate-800 to-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12 text-white">
          Live Stats
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                bg-zinc-900/80
                border border-zinc-800
                rounded-2xl
                px-6 py-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-orange-500/60
                hover:shadow-[0_14px_45px_rgba(255,107,53,0.18)]
              "
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                  <stat.icon className="w-4.5 h-4.5 text-orange-500" />
                </div>

                <span className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </span>
              </div>

              {/* Value */}
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>

              {/* Change (now UNDER the value) */}
              <div
                className={`text-sm font-semibold ${
                  stat.change.startsWith('+')
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
