interface IProps {
  title?: string;
  message?: string;

  action?: (a: React.FormEvent<HTMLFormElement>) => any;
}
const EmptyState = ({
  title = "No results found",
  message = "No results found. Please try again.",
  action,
}: IProps) => {
  return (
    <div className="flex  flex-col justify-center space-y-7 ">
      <img
        src="/images/no-result.png"
        height="144px"
        width="229.76px"
        alt="no-result"
      />
      <div className="text-center space-y-1  ">
        <p className="text-[24px] font-[700]">{title}</p>
        <p className="text-[14px] font-[400] text-[#838282]">{message}</p>
      </div>
      <form
        onSubmit={(a: React.FormEvent<HTMLFormElement>) => action && action(a)}
        className="flex justify-center w-full "
      >
        <button
          type="submit"
          className="border-none focus:border-none text-blue-base focus:outline-none text-center focus:ring-0 font-[600] text-[15px]"
        >
          Retry
        </button>
      </form>
    </div>
  );
};

export default EmptyState;
