import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

const TimelineComponent = ({ content }: any) => {
  return (
    <div className="h-[40vh] overflow-auto">
      <Timeline position="alternate">
        {content.map((data: any) => (
          <>
            {data.data.second ? (
              <>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    {data.data.single.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{data.data.single.action}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    {data.data.second.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{data.data.second.action}</TimelineContent>
                </TimelineItem>
              </>
            ) : (
              <>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    {data.data.single.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{data.data.single.action}</TimelineContent>
                </TimelineItem>
              </>
            )}
          </>
        ))}
        {/* <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem> */}
        {/* <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem> */}
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
