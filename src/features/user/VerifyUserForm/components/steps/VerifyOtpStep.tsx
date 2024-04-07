import React from "react";

import { Body } from "@/components/Typography";
import TextField from "@/components/input/TextField";

import { StyledStepHeading } from "../../VerifyUserForm.styles";
import { useVerifyUserForm } from "../../VerifyUserForm.context";

const VerifyOtpStep: React.FC = () => {
  const { values, setFieldValue } = useVerifyUserForm();

  return (
    <>
      <StyledStepHeading>Please verify that it&apos;s you</StyledStepHeading>
      <Body
        size="lg"
        className="mt-2"
        style={{ color: "#818898", maxWidth: "34ch", marginBottom: "5rem" }}
      >
        Please enter the code we just sent to <b>johndoe@example.com</b>
      </Body>

      <TextField
        className="mt-4"
        placeholder="OTP"
        value={values.otp}
        onChange={(value) => {
          setFieldValue("otp", value);
        }}
      />
    </>
  );
};

export default VerifyOtpStep;
