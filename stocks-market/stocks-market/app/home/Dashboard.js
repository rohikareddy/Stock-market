import React from 'react';
import { ScrollView,View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const Dashboard = ({ sectorData }) => {
  const renderSectorCards = () => {
    if (!sectorData || sectorData.length === 0) {
      return <Text>No data available</Text>;
    }

    return sectorData.map((sector, index) => (
      <Card key={index} style={styles.card}>
        <Card.Content>
          <Title>{sector.name}</Title>
          <Paragraph>Performance: {sector.performance}</Paragraph>
          <Paragraph>Last Updated: {new Date(sector.lastUpdated).toLocaleString()}</Paragraph>
        </Card.Content>
      </Card>
    ));
  };

  const prepareChartData = () => {
    if (!sectorData || sectorData.length === 0) {
      return {
        labels: [],
        datasets: [{ data: [] }],
      };
    }

    return {
      labels: sectorData.map((sector) => sector.name),
      datasets: [
        {
          data: sectorData.map((sector) => sector.performance),
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        },
      ],
    };
  };

  return (
    <View style={styles.container}>
       <Title>Sector Performance</Title>
      {renderSectorCards()}

      <Card style={styles.chartCard}>
        <Card.Content>
          <Title>Sector Performance</Title>
          <ScrollView horizontal>
          <LineChart
            data={prepareChartData()}
            width={1000}
            height={400}
            yAxisLabel="$"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 4,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
          />
          </ScrollView>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
  },
  chartCard: {
    marginTop: 16,
  },
});

export default Dashboard;
