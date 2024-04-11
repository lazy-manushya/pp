import { useCallback, useMemo, useState } from "react";

import { ContractCompleteDetails } from "@/services/ContractsService";
import { formatDate } from "@/utils/date";
import Icon from "@/components/misc/Icon";
import PageWithHeaderLayout from "@/features/layouts/PageWithHeaderLayout";
import Modal, { useModalState } from "@/components/misc/Modal";

import {
  StyledBottomSection,
  StyledCard,
  StyledContainer,
  StyledContentSection,
} from "./ReviewSubmissions.styles";
import FilesInput, { FileObject } from "@/features/input/FilesInput";
import FileCard, {
  getFileCardPropsFromFileObj,
} from "@/features/input/FileCard";
import Button from "@/components/input/Button";

const ReviewSubmissions: React.FC<{
  contractDetails: ContractCompleteDetails;
}> = ({ contractDetails }) => {
  const { milestones, files } = contractDetails;

  const modalState = useModalState();

  const [nextDueDate, setNextDueDate] = useState(() => {
    const { end_date } = milestones[0];

    return end_date ? new Date(end_date) : new Date();
  });

  const filesCardProps = useMemo(
    () =>
      files.map((file) =>
        getFileCardPropsFromFileObj({ mediaFile: file } satisfies FileObject)
      ),
    [files]
  );

  return (
    <>
      <StyledCard className="mt-3" onClick={modalState.open}>
        <Icon isSrcRelative src="file_arrow_right.svg" customSize="1rem" />
        <span>Review submissions</span>
        <Icon isSrcRelative src="chevron_right.svg" customSize="xs" />
      </StyledCard>

      <Modal state={modalState}>
        <PageWithHeaderLayout
          headerProps={{
            titleProps: { children: "Review work" },
            backButtonProps: {
              onClick: modalState.close,
              children: <Icon isSrcRelative src="cross.svg" size="xs" />,
              style: {
                background: "transparent",
              },
            },
          }}
        >
          <StyledContainer>
            <StyledContentSection>
              <p>
                Commodo elit do anim id sit fugiat minim est pariatur id ad.
                Culpa consequat pariatur exercitation ut ea qui nulla occaecat
                sunt qui esse occaecat cupidatat. Et in reprehenderit ea
                proident et sit nostrud. Minim amet sunt dolor ad reprehenderit
                cupidatat fugiat aute aliqua. Sit quis mollit veniam
                exercitation laborum labore labore sunt dolore. Laborum ullamco
                est eiusmod sit.
              </p>

              {filesCardProps.map((item, i) =>
                item ? <FileCard key={i} {...item} className="mt-3" /> : null
              )}
            </StyledContentSection>

            <StyledBottomSection>
              <p>
                By selecting “Approve” you are agreeing to release the funds
                allocated to this milestone. Funds cannot be reversed one
                released.
              </p>

              <Button className="w-100 mt-3">Mark as done</Button>
            </StyledBottomSection>
          </StyledContainer>
        </PageWithHeaderLayout>
      </Modal>
    </>
  );
};

export default ReviewSubmissions;
