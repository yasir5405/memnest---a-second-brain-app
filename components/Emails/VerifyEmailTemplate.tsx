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

interface VerifyEmailTemplateProps {
  verificationUrl: string;
}

export const VerifyEmailTemplate = ({
  verificationUrl,
}: VerifyEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Verify your MemNest account</Preview>

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
            Verify your email
          </Text>

          <Text>
            Welcome! To complete your registration, please verify your email
            address by clicking the button below.
          </Text>

          <Section style={{ margin: "32px 0" }}>
            <Button
              href={verificationUrl}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Verify Email
            </Button>
          </Section>

          <Text>
            If you didn&apos;t create this account, you can safely ignore this
            email. No account will be activated without email verification.
          </Text>

          <Text style={{ color: "#666", fontSize: "12px" }}>
            This link may expire after some time for security reasons.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
