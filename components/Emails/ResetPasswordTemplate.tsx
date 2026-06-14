import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ResetPasswordEmailProps {
  resetUrl: string;
}

export const ResetPasswordTemplate = ({
  resetUrl,
}: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reset your MemNest password</Preview>

      <Body
        style={{
          backgroundColor: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container style={{ padding: "40px 20px" }}>
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Reset your password
          </Text>

          <Text>
            We received a request to reset your password. Click the button below
            to choose a new password.
          </Text>

          <Section style={{ margin: "32px 0" }}>
            <Button
              href={resetUrl}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Reset Password
            </Button>
          </Section>

          <Text>
            If you didn&apos;t request a password reset, you can safely ignore
            this email.
          </Text>

          <Text style={{ color: "#666", fontSize: "12px" }}>
            This link may expire after some time for security reasons.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
