"use client"; // Add this at the top of the file
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import DashboardCard from "../../../../components/DashboardCard";

const Tests = [
  {
    id: "1",
    testType: "Blood Test",
    hospital: "City Hospital",
    report: "Download",
    pbg: "primary.main",
    approval: "Accepted",
    approvalBg: "success.main",
  },
  {
    id: "2",
    testType: "X-Ray",
    hospital: "Global Health Center",
    report: "Download",
    pbg: "secondary.main",
    approval: "Rejected",
    approvalBg: "error.main",
  },
  {
    id: "3",
    testType: "MRI",
    hospital: "HealthCare Clinic",
    report: "Download",
    pbg: "error.main",
    approval: "Accepted",
    approvalBg: "success.main",
  },
  {
    id: "4",
    testType: "CT Scan",
    hospital: "Sunrise Hospital",
    report: "Download",
    pbg: "warning.main",
    approval: "Pending",
    approvalBg: "warning.main",
  },
];

const Approval = () => {
  return (
    <DashboardCard title="Test Approvals">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Tests.map((test) => (
          <Card key={test.id} variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>
                Test ID: {test.id}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Test Type: {test.testType}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Hospital: {test.hospital}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Report:
                </Typography>
                <Chip
                  sx={{
                    ml: 1,
                    px: '4px',
                    backgroundColor: test.pbg,
                    color: '#fff',
                  }}
                  size="small"
                  label={test.report}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Approval Status:
                </Typography>
                <Chip
                  sx={{
                    ml: 1,
                    px: '4px',
                    backgroundColor: test.approvalBg,
                    color: '#fff',
                  }}
                  size="small"
                  label={test.approval}
                />
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => alert(`Rejecting test ID: ${test.id}`)}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => alert(`Accepting test ID: ${test.id}`)}
              >
                Accept
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </DashboardCard>
  );
};

export default Approval;
