/**
 * Responsible for the layout of the introdoctury text and buttons.
 * @param {React.ReactNode} param0 - The React components to render.
 * @returns {React.ReactNode} - The layout.
 */
const IntroductionTextLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 mt-[-40%] md:mt-0">{children}</div>
  );
};

export default IntroductionTextLayout;
