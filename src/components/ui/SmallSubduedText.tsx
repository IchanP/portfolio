const SmallSubudedText = ({ text }: { text: string }) => {
  return (
    <p className="text-sm text-center text-gray-500 dark:text-black-200">
      {text}
    </p>
  );
};

export default SmallSubudedText;
