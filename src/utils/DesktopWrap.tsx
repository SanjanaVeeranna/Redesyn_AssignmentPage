const DesktopWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dv:flex dv:justify-center bg-white">
      <div className="dv:max-w-[450px] w-full">{children}</div>
    </div>
  );
};

export default DesktopWrap;
