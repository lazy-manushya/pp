import React from "react";

import { Body } from "@/components/Typography";
import TextField from "@/components/input/TextField";

import { StyledStepHeading } from "../../VerifyUserForm.styles";
import { useVerifyUserForm } from "../../VerifyUserForm.context";

const UserDetailsStep: React.FC = () => {
  const { values, setFieldValue } = useVerifyUserForm();

  return (
    <>
      <StyledStepHeading>Hi Client name, welcome to PayPipe!</StyledStepHeading>
      <Body
        size="lg"
        className="mt-2"
        style={{ color: "#818898", maxWidth: "34ch", marginBottom: "5rem" }}
      >
        Please complete the information below to verify and view the offer.
      </Body>

      <div className="d-flex gap-3">
        <TextField
          className="mt-3"
          placeholder="First name"
          value={values.firstName}
          onChange={(value) => {
            setFieldValue("firstName", value);
          }}
        />

        <TextField
          className="mt-3"
          placeholder="Last name*"
          value={values.lastName}
          onChange={(value) => {
            setFieldValue("lastName", value);
          }}
        />
      </div>

      <TextField
        className="mt-4"
        placeholder="Email"
        value={values.email}
        onChange={(value) => {
          setFieldValue("email", value);
        }}
      />
    </>
  );
};

export default UserDetailsStep;
