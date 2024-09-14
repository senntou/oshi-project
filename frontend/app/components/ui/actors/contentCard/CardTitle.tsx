const CardTitle = ({ children }: { children: string }) => {
  return (
    <>
      <h2 className="mb-2 text-lg text-gray-800">{children}</h2>
    </>
  );
};

export default CardTitle;
