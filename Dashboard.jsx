import React from "react";
import "../styles/dashboard.css";
import "leaflet/dist/leaflet.css";  
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";

import { MapContainer, TileLayer } from "react-leaflet";

// Sample Data
const genderData = [
  { id: "Male", label: "Male", value: 46 },
  { id: "Female", label: "Female", value: 54 }
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
  { country: "United States", population: 18 },
  { country: "India", population: 12 },
  { country: "China", population: 10 },
  { country: "Brazil", population: 8 },
  { country: "Indonesia", population: 6 }
];

export default function Dashboard() {
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
          <ResponsivePie
            data={genderData}
            innerRadius={0.6}
            padAngle={2}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            colors={{ scheme: "blues" }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
          />
        </div>

        {/* Age Group Pie Chart */}
        <div className="chart-box">
          <ResponsivePie
            data={ageGroupData.map(d => ({
              id: d.name,
              label: d.name,
              value: d.value
            }))}
            innerRadius={0.5}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            colors={{ scheme: "blues" }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
          />
        </div>

        {/* Age Density Bar Chart */}
        <div className="chart-box">
          <ResponsiveBar
            data={ageGroupData}
            keys={["value"]}
            indexBy="name"
            margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
            padding={0.3}
            colors={{ scheme: "blues" }}
            axisBottom={{
              tickRotation: 0
            }}
          />
        </div>
      </div>

      {/* Bottom Charts */}
      <div className="charts-grid-2">
        
        {/* World Map (Leaflet) */}
        <div className="chart-box">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>

        {/* Top Countries Bar Chart */}
        <div className="chart-box">
          <ResponsiveBar
            data={topCountries}
            keys={["population"]}
            indexBy="country"
            margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
            padding={0.3}
            colors={{ scheme: "blues" }}
          />
        </div>

      </div>
    </div>
  );
}
