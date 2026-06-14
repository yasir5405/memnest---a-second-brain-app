import ResetPasswordForm from "@/components/Forms/ResetPasswordForm";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) => {
  const { token } = await searchParams;
  return <ResetPasswordForm token={token} />;
};

export default Page;
