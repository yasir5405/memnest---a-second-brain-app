interface EmailTemplateProps {
  firstName: string;
}
const ResetPasswordTemplate = ({ firstName }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
};

export default ResetPasswordTemplate;
