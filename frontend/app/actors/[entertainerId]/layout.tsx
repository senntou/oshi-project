import EntertainerNameCard from '@/app/components/ui/entertainers/EntertainerNameCard';

const EntertainerLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col h-full w-full">
      <EntertainerNameCard>楠木ともり</EntertainerNameCard>
      {children}
    </div>
  );
};

export default EntertainerLayout;
