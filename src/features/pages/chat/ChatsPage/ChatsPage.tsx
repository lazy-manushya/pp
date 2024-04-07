import React from "react";

import TextField from "@/components/input/TextField";
import Icon from "@/components/misc/Icon";
import NoContent from "@/components/data/ImageTitleContent";
import MobilePrimaryLayout from "@/features/layouts/MobilePrimaryLayout";

import { CHATS_LIST } from "./ChatsPage.config";
import {
  StyledChatCard,
  StyledChatList,
  StyledContainer,
} from "./ChatsPage.styles";

const ChatsPage: React.FC = () => {
  const chatsList = CHATS_LIST;
  const hasNoChats = !chatsList.length;

  return (
    <MobilePrimaryLayout>
      <StyledContainer>
        <TextField
          placeholder="Search for contracts, clients, dates"
          prependContent={
            <Icon
              src="/assets/images/icons/search.svg"
              alt="Search"
              size="sm"
            />
          }
        />

        {hasNoChats ? (
          <NoContent
            image="/assets/images/pages/chats/no_messages.svg"
            title={<>You don&apos;t have any message</>}
            content="Start a chat with any of your contacts or others to have a conversation."
          />
        ) : (
          <StyledChatList>
            {chatsList.map((chat, i) => {
              return (
                <React.Fragment key={i}>
                  {i !== 0 && <hr />}
                  <StyledChatCard key={i} {...chat} />
                </React.Fragment>
              );
            })}
          </StyledChatList>
        )}
      </StyledContainer>
    </MobilePrimaryLayout>
  );
};

export default ChatsPage;
