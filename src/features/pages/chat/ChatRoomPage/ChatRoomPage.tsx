import React from "react";

import ChatRoom from "@/features/chat/ChatRoom";

import { USER_PROFILE } from "./ChatRoomPage.temp";
import { StyledContainer } from "./ChatRoomPage.styles";
import { MESSAGES } from "./ChatRoomPage.config";

const ChatRoomPage: React.FC = () => {
  return (
    <StyledContainer>
      <ChatRoom
        currentUserId={1}
        users={[
          { id: 1, name: "Me" },
          {
            id: 2,
            name: "Francois Handa",
            image: USER_PROFILE,
            email: "contact@paypipe.com",
          },
        ]}
        messages={MESSAGES}
      />
    </StyledContainer>
  );
};

export default ChatRoomPage;
