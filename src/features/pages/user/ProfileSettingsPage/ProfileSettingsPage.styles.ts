"use client";

import styled from "@emotion/styled";

import Avatar from "@/components/misc/Avatar";

export const StyledPage = styled.div`
  padding: 1rem;
  height: 100%;
  overflow: auto;
`;

export const StyledAvatar = styled(Avatar)`
  --size: 120px;
`;

export const StyledName = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  color: #0d0d12;
  margin-top: 1.5rem;
`;

export const StyledEmail = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #818898;
  margin-top: 0.25rem;
`;

export const StyledUserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;
