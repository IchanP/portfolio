import RoundedDiv from "./RoundedDiv";

const Interest = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoundedDiv>
      <div className="flex flex-col md:flex-row md:gap-5 pb-16 pt-8 items-start">
        <div className="flex flex-col gap-5 md:flex-row items-center">
          {children}
        </div>
      </div>
    </RoundedDiv>
  );
};

export default Interest;
