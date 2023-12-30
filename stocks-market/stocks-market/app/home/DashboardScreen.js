import React, { useEffect, useState } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import Dashboard from "./Dashboard";

const DashboardScreen = () => {
  const [sectorData, setSectorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://api.iex.cloud/v1/data/CORE/SECTOR_PERFORMANCE/market?token=pk_9e697d85bc3446ba8c552b18e85ff4bc"
    )
      .then((response) => response.json())
      .then((data) => {
        setSectorData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <Dashboard sectorData={sectorData} />
    </ScrollView>
  );
};

export default DashboardScreen;
