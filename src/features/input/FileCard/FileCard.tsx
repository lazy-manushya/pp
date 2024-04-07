import React, { useMemo } from "react";
import Image from "next/image";

import Icon from "@/components/misc/Icon";
import PopoverButton, {
  usePopoverState,
} from "@/components/misc/PopoverButton";

import {
  StyledButton,
  StyledCard,
  StyledDangerButton,
  StyledIconContainer,
  StyledMenu,
  StyledMiddleContainer,
  StyledPrimaryText,
  StyledSecondaryText,
} from "./FileCard.styles";
import { IFileCardProps } from "./FileCard.types";
import { getFileConfig } from "./FileCard.utils";
import { formatBytes } from "@/utils/files";

const FileCard: React.FC<IFileCardProps> = ({
  name,
  sizeInBytes,
  fileUrl: _,
  className,
  deleteButtonProps,
}) => {
  const config = useMemo(() => getFileConfig(name), [name]);
  const menuState = usePopoverState();

  const fileSize = useMemo(() => formatBytes(sizeInBytes), [sizeInBytes]);

  if (!config) {
    return null;
  }

  const {
    styles: { bgColor, iconBgColor, iconUrl },
  } = config;

  return (
    <StyledCard className={className} style={{ background: bgColor }}>
      <StyledIconContainer style={{ background: iconBgColor }}>
        <Image src={iconUrl} alt="" width={16} height={16} />
      </StyledIconContainer>

      <StyledMiddleContainer>
        <StyledPrimaryText>{name}</StyledPrimaryText>
        <StyledSecondaryText className="mt-2">
          {fileSize}
        </StyledSecondaryText>
      </StyledMiddleContainer>

      <PopoverButton
        state={menuState}
        buttonProps={{
          variant: "ghost",
          children: <Icon isSrcRelative src="menu.svg" size="sm" />,
        }}
        popoverProps={{
          placement: "bottom right",
          crossOffset: 16,
          children: (
            <StyledMenu>
              <StyledButton
                className="w-100"
                variant="ghost"
                onClick={() => {
                  menuState.close();
                }}
              >
                <Icon isSrcRelative src="eyes.svg" size="xs" />
                <span>Preview</span>
              </StyledButton>
              <StyledDangerButton
                className="w-100"
                variant="ghost"
                {...deleteButtonProps}
                onClick={(e) => {
                  if (deleteButtonProps && deleteButtonProps.onClick) {
                    deleteButtonProps.onClick(e);
                  }

                  menuState.close();
                }}
              >
                <Icon isSrcRelative src="dustbin.svg" size="xs" />
                <span>Delete</span>
              </StyledDangerButton>
            </StyledMenu>
          ),
        }}
      />
    </StyledCard>
  );
};

export default FileCard;