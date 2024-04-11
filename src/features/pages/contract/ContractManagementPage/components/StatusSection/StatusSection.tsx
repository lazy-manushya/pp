import { ContractCompleteDetails } from "@/services/ContractsService";

import {
  StyledContainer,
  StyledDateContainer,
  StyledHighlightedLabel,
  StyledLabel,
  StyledProgressContainer,
  StyledStatusBar,
  StyledTopContainer,
  StyledValue,
} from "./StatusSection.styles";
import { useCallback, useMemo, useState } from "react";
import { formatDate } from "@/utils/date";
import Button from "@/components/input/Button";
import Icon from "@/components/misc/Icon";
import Drawer from "@/components/misc/Drawer";
import Calendar from "@/components/input/Calendar";

const StatusSection: React.FC<{ contractDetails: ContractCompleteDetails }> = ({
  contractDetails,
}) => {
  const { milestones } = contractDetails;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [nextDueDate, setNextDueDate] = useState(() => {
    const { end_date } = milestones[0];

    return end_date ? new Date(end_date) : new Date();
  });

  const totalValue = useMemo(
    () => milestones.reduce((sum, { value }) => sum + +value, 0),
    [milestones]
  );

  const nextDueDateFormatted = useMemo(
    () => formatDate(nextDueDate),
    [nextDueDate]
  );

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((v) => !v);
  }, []);

  return (
    <StyledContainer>
      <StyledTopContainer>
        <StyledProgressContainer>
          <StyledLabel>Status</StyledLabel>
          <StyledValue className="mt-2">In progress</StyledValue>
          <StyledStatusBar className="mt-2" />
        </StyledProgressContainer>

        <div>
          <StyledLabel>Total payment</StyledLabel>
          <StyledHighlightedLabel className="mt-2">
            (Securly held)
          </StyledHighlightedLabel>
          <StyledValue className="mt-1">${totalValue}.00</StyledValue>
        </div>
      </StyledTopContainer>

      <StyledDateContainer className="mt-4">
        <div>
          <StyledLabel>Next due date</StyledLabel>
          <StyledValue className="mt-2">
            {nextDueDateFormatted}
          </StyledValue>
        </div>

        <Button variant="ghost" onClick={toggleDrawer}>
          <Icon isSrcRelative src="edit.svg" size="sm" />
        </Button>
      </StyledDateContainer>

      <Drawer
        isOpen={isDrawerOpen}
        onRequestClose={toggleDrawer}
        drawerMidHeight="428px"
        headerProps={{ children: "Set deadlines" }}
      >
        <Calendar value={nextDueDate} onChange={setNextDueDate} />
      </Drawer>
    </StyledContainer>
  );
};

export default StatusSection;
