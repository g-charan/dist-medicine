'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from './PageContainer';
// components
import ProfitExpenses from './ProfitExpenses';
import TrafficDistribution from './TrafficDistribution';
import UpcomingSchedules from './UpcomingSchedules';
import ProductSales from './ProductSales';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box> {/* Ensure no horizontal scrolling */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ProfitExpenses />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TrafficDistribution />
              </Grid>
              <Grid item xs={12}>
                <ProductSales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <UpcomingSchedules />
          </Grid>
          <Grid item xs={12} lg={8}>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;

