import React, { useState, useEffect } from 'react';
import './FuturisticDashboard.css';

const FuturisticDashboard = () => {
  const [metrics, setMetrics] = useState({
    powerCore: 98.7,
    neuralNetwork: 2.4,
    dataThroughput: 847,
    quantumState: 'STABLE'
  });

  const [terminalLines, setTerminalLines] = useState([
    '>> Initializing quantum processors...',
    '>> Neural pathways optimized',
    '>> Data encryption: AES-2048 active',
    '>> Firewall: QUANTUM-SHIELD engaged',
    '>> AI consciousness level: 94.2%',
    '>> All systems nominal',
    '>> Ready for deep space operations'
  ]);

  const [chartData, setChartData] = useState([80, 65, 90, 75, 95, 70, 85, 88]);

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics(prev => ({
        ...prev,
        powerCore: 95 + Math.random() * 5,
        neuralNetwork: 2.0 + Math.random() * 1.0,
        dataThroughput: 800 + Math.random() * 200
      }));
    };

    const addTerminalLine = () => {
      const messages = [
        '>> Quantum entanglement stable',
        '>> Data packet intercepted and analyzed',
        '>> Neural network learning rate: optimal',
        '>> Backup systems: ready',
        '>> Encryption protocols updated',
        '>> Anomaly detection: inactive',
        '>> Power grid: balanced',
        '>> Communication array: online'
      ];

      setTerminalLines(prev => {
        const newLines = [...prev, messages[Math.floor(Math.random() * messages.length)]];
        return newLines.length > 10 ? newLines.slice(-9) : newLines;
      });
    };

    const updateChart = () => {
      setChartData(prev => prev.map(() => Math.random() * 80 + 20));
    };

    const intervals = [
      setInterval(updateMetrics, 3000),
      setInterval(addTerminalLine, 4000),
      setInterval(updateChart, 5000)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const StatusIndicator = ({ label, status = 'online' }) => (
    <div className="status-item">
      <div className="status-dot"></div>
      <span>{label}</span>
    </div>
  );

  const MetricCard = ({ title, value, unit, progress }) => (
    <div className="card hologram-effect">
      <div className="card-title">{title}</div>
      <div className="metric-value">
        {value}
        {unit && <span className="metric-unit">{unit}</span>}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <header className="header glow">
        <div className="logo">NEXUS CONTROL</div>
        <div className="status-indicators">
          <StatusIndicator label="SYSTEMS ONLINE" />
          <StatusIndicator label="SECURE CONNECTION" />
          <StatusIndicator label="AI ACTIVE" />
        </div>
      </header>

      <div className="grid-container">
        <MetricCard 
          title="Power Core" 
          value={metrics.powerCore.toFixed(1)} 
          unit="%" 
          progress={metrics.powerCore} 
        />
        <MetricCard 
          title="Neural Network" 
          value={metrics.neuralNetwork.toFixed(1)} 
          unit="THz" 
          progress={85} 
        />
        <MetricCard 
          title="Data Throughput" 
          value={Math.floor(metrics.dataThroughput)} 
          unit="GB/s" 
          progress={92} 
        />
        <MetricCard 
          title="Quantum State" 
          value={metrics.quantumState} 
          progress={100} 
        />

        <div className="card chart-container hologram-effect">
          <div className="card-title">System Performance Matrix</div>
          <div className="chart">
            <div className="chart-bars">
              {chartData.map((height, index) => (
                <div 
                  key={index}
                  className="bar" 
                  style={{ '--height': `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="system-monitor">
        <div className="card hologram-effect">
          <div className="card-title">Network Topology</div>
          <div className="network-graph">
            <div className="node" style={{ top: '20%', left: '20%' }}></div>
            <div className="node" style={{ top: '30%', left: '70%' }}></div>
            <div className="node" style={{ top: '70%', left: '40%' }}></div>
            <div className="node" style={{ top: '50%', left: '80%' }}></div>
            <div className="connection" style={{ 
              top: '25%', 
              left: '25%', 
              width: '40%', 
              transform: 'rotate(15deg)' 
            }}></div>
            <div className="connection" style={{ 
              top: '60%', 
              left: '20%', 
              width: '25%', 
              transform: 'rotate(-30deg)' 
            }}></div>
            <div className="connection" style={{ 
              top: '40%', 
              left: '65%', 
              width: '20%', 
              transform: 'rotate(45deg)' 
            }}></div>
          </div>
        </div>

        <div className="card hologram-effect">
          <div className="card-title">System Terminal</div>
          <div className="terminal">
            <div className="terminal-header">[NEXUS@CONTROL ~]$</div>
            {terminalLines.map((line, index) => (
              <div 
                key={index} 
                className="terminal-line"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="card hologram-effect">
          <div className="card-title">Resource Allocation</div>
          <div style={{ marginTop: '20px' }}>
            {[
              { label: 'CPU Clusters', value: 87 },
              { label: 'Memory Banks', value: 73 },
              { label: 'Storage Matrix', value: 91 }
            ].map((resource, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '5px' 
                }}>
                  <span>{resource.label}</span>
                  <span>{resource.value}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${resource.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticDashboard;