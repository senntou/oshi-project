const Spacer = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id="spacer" className="flex h-screen w-screen justify-center">
      <div className="flex h-full w-screen justify-center sm:max-w-sm">
        {children}
      </div>
    </div>
  );
};

export default Spacer;
