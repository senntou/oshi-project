import EntertainerNameCard from '@/app/components/ui/entertainers/EntertainerNameCard';

const EntertainerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <EntertainerNameCard>楠木ともり</EntertainerNameCard>
      <div>{children}</div>
    </div>
  );
};

export default EntertainerLayout;
