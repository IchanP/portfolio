import TechStackFetcher from "./TechStackFetcher";

const TechStack = () => {
  return (
    <>
      <p className="font-ovo text-center text-lg opacity-80">Tools I use</p>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5 mt-5 md:mt-0">
        <TechStackFetcher />
      </div>
    </>
  );
};

export default TechStack;
