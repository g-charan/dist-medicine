"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DashboardCard from "@/components/DashboardCard";
import { Collapse } from "@mui/material"; // Import Collapse for expanding stages
import CustomButton from "@/components/CustomButton";

// Stages of drug testing with detailed info
const stages = [
  {
    time: "Stage_1",
    color: "primary.main",
    text: "Chemical Tests",
    details: "These tests focus on the drug's molecular structure and interactions.",
  },
  {
    time: "Stage_2",
    color: "secondary.main",
    text: "Pre-Clinical Trials",
    details: "Animal testing is done to evaluate the drug’s effectiveness and safety.",
  },
  {
    time: "Stage_3",
    color: "success.main",
    text: "Phase 1 Clinical Trials",
    details: "Initial human testing to assess safety and dosage tolerance.",
  },
  {
    time: "Stage_4",
    color: "warning.main",
    text: "Phase 2 Clinical Trials",
    details: "Larger group testing to evaluate effectiveness and further assess safety.",
  },
  {
    time: "Stage_5",
    color: "error.main",
    text: "Phase 3 Clinical Trials",
    details:
      "Widespread testing with a diverse population to confirm effectiveness and monitor side effects.",
  },
];

const ReverseEngineering = () => {
  const [expandedStage, setExpandedStage] = React.useState<string | null>(null);

  // Function to handle expanding a stage
  const handleExpand = (stage: string) => {
    setExpandedStage(expandedStage === stage ? null : stage); // Toggle expand/collapse
  };

  return (
    <DashboardCard title="Reverse Engineering Dashboard">
      {/* Container for title and button */}
      <div style={{ position: "relative", paddingBottom: "20px" }}>
        <h6>Paracetamol</h6>
        <CustomButton
          onClick={() => console.log("Filter applied")}
          style={{
            position: "absolute",
            right: 0,  // Aligns the button to the right edge
            top: -47,    // Aligns the button to the top edge
          }}
        >
          Download Report
        </CustomButton>
      </div>

      {/* Timeline Content */}
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {stages.map((stage) => (
          <TimelineItem key={stage.time}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {stage.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: stage.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                fontSize: "14px",
                cursor: "pointer", // Add pointer to indicate clickable text
              }}
              onClick={() => handleExpand(stage.time)}
            >
              {stage.text}

              {/* Collapsible details section */}
              <Collapse in={expandedStage === stage.time} timeout="auto" unmountOnExit>
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  {stage.details}
                </div>
              </Collapse>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </DashboardCard>
  );
};

export default ReverseEngineering;
