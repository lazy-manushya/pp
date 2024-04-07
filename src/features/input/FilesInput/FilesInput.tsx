import React, { useCallback, useMemo } from "react";

import FileCard, { IFileCardProps } from "@/features/input/FileCard";
import PageWithHeaderLayout from "@/features/layouts/PageWithHeaderLayout";
import Modal, { useModalState } from "@/components/misc/Modal";

import {
  StyledCount,
  StyledIcon,
  StyledInput,
  StyledLabel,
  StyledModelInner,
  StyledModelText,
  StyledText,
} from "./FilesInput.styles";
import { IFilesInputProps } from "./FilesInput.types";

const FilesInput: React.FC<IFilesInputProps> = ({
  value = [],
  onChange,
  className,
  disabled = false,
  label = "Attach files",displayFileCount=2
}) => {
  const allFilesModalState = useModalState();
  const fileCount = value.length;

  const filesData = useMemo(() => {
    const items: IFileCardProps[] = value
      .map(({ file, mediaFile }) => {
        if (mediaFile) {
          return {
            name: mediaFile.url || "Name not available",
            fileUrl: mediaFile.url,
            sizeInBytes: 0,
          } satisfies IFileCardProps;
        }

        if (file) {
          return {
            name: file.name,
            fileUrl: URL.createObjectURL(file),
            sizeInBytes: file.size,
          } satisfies IFileCardProps;
        }

        return null;
      })
      .filter(Boolean) as IFileCardProps[];

    return items;
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      // @ts-ignore
      const newFiles: FileObject[] = [...e.target.files].map((file) => ({
        file,
      }));
      const updatedValue = value.concat(newFiles);
      if (onChange) {
        onChange(updatedValue);
      }
    },
    [value, onChange]
  );

  const handleDelete = useCallback(
    (index: number) => {
      const updatedValue = value.filter((_, i) => i !== index);

      if (onChange) {
        onChange(updatedValue);
      }
    },
    [value, onChange]
  );

  return (
    <>
      <div className={className}>
        <StyledLabel>
          <StyledInput
            multiple
            type="file"  
            onChange={handleChange}
            disabled={disabled}
          />

          <StyledIcon isSrcRelative src="clip.svg" customSize="16px" />

          <StyledText>{label}</StyledText>

          {!!fileCount && (
            <StyledCount
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                allFilesModalState.open();
              }}
            >
              {fileCount}
            </StyledCount>
          )}
        </StyledLabel>

        {[...filesData].splice(0, displayFileCount).map((file, i) => (
          <FileCard
            key={i}
            {...file}
            className="mt-3"
            deleteButtonProps={{
              onClick: () => {
                handleDelete(i);
              },
            }}
          />
        ))}
      </div>

      <Modal state={allFilesModalState}>
        <PageWithHeaderLayout
          headerProps={{
            backButtonProps: { onClick: allFilesModalState.close },
            titleProps: {
              children: "All attachments",
            },
          }}
        >
          <StyledModelInner>
            <StyledModelText>
              {fileCount} {fileCount > 1 ? "Files" : "File"}
            </StyledModelText>

            {filesData.map((file, i) => (
              <FileCard
                key={i}
                {...file}
                className="mt-3"
                deleteButtonProps={{
                  onClick: () => {
                    handleDelete(i);
                  },
                }}
              />
            ))}
          </StyledModelInner>
        </PageWithHeaderLayout>
      </Modal>
    </>
  );
};

export default FilesInput;
