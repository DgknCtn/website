import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer: React.FC = () => {
  const mintDate = new Date('2025-01-01T00:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span>Minting is Live!</span>;
    }

    return (
      <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
        {[
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-black/40 backdrop-blur-lg rounded-xl p-4 border border-cyan-500/20 text-center"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {item.value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
        Vanth is Coming Soon
      </h2>
      <Countdown date={mintDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;
