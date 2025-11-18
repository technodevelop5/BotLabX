import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

// Sample Data (replace with real values)
const genderData = [
  { name: "Male", value: 46 },
  { name: "Female", value: 54 }
];

const ageGroupData = [
  { name: "20-29", value: 22 },
  { name: "30-39", value: 28 },
  { name: "40-49", value: 20 },
  { name: "50-59", value: 15 },
  { name: "60-69", value: 10 },
  { name: "70+", value: 5 }
];

const topCountries = [
  { country: "United States", population: 18, percentage: 10 },
  { country: "India", population: 12, percentage: 7 },
  { country: "China", population: 10, percentage: 6 },
  { country: "Brazil", population: 8, percentage: 5 },
  { country: "Indonesia", population: 6, percentage: 4 }
];

export default function DashboardWithRecharts() {
  const COLORS = ["#3b82f6", "#2563eb", "#1e40af", "#1d4ed8", "#60a5fa", "#93c5fd"]; 

  return (
    <div className="dashboard-container fade-in">

      {/* Header */}
      <header className="dashboard-header">
        <h1 className="header-title">Comprehensive Demographic Profile Analytics</h1>
        <button className="upload-btn">Upload Logo</button>
      </header>

      {/* Filters */}
      <div className="filters-grid">
        <div className="filter-box">
          <label>Start date</label>
          <input type="date" />
        </div>
        <div className="filter-box">
          <label>End date</label>
          <input type="date" />
        </div>
        <div className="filter-box">
          <label>Select Region</label>
          <select>
            <option>All</option>
          </select>
        </div>
        <div className="filter-box">Data Last Updated: 01/01/2025</div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Population</div>
          <div className="stat-value">25.2k</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Average Age</div>
          <div className="stat-value">36.7</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Gender Ratio</div>
          <div className="stat-value">1.05</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Top Countries</div>
          <div className="stat-value">5</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-grid-3">

        {/* Gender Pie Chart */}
        <div className="chart-box">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={genderData}
                dataKey="value"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={3}
              >
                {genderData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Age Group Pie Chart */}
        <div className="chart-box">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={ageGroupData}
                dataKey="value"
                innerRadius={50}
                outerRadius={80}
              >
                {ageGroupData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Age Density Bar Chart */}
        <div className="chart-box">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageGroupData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="charts-grid-2">
        <div className="chart-box">/* Interactive Map */
          <ResponsiveContainer>
            <div style={{ width: "100%", height: "100%" }}>
              <ComposableMap projectionConfig={{ scale: 120 }}>
                <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          const { NAME } = geo.properties;
                        }}
                        onMouseLeave={() => {}
                        }
                        style={{
                          default: { fill: "#93c5fd", outline: "none" },
                          hover: { fill: "#2563eb", outline: "none" },
                          pressed: { fill: "#1e40af", outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            </div>
          </ResponsiveContainer></div>

        <div className="chart-box">
          <ResponsiveContainer>
            <BarChart data={topCountries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="population" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
