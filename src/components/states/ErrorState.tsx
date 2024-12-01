
interface IProps {
  title?: string;
  message?: string;

  action?: (a: React.FormEvent<HTMLFormElement>) => any;
}
const ErrorState = ({
  title = "Connection Lost",
  message = "Oops! It seems you're currently offline.",
  action,
}: IProps) => {
  return (
    <div className="flex justify-center flex-col space-y-7 ">
      <img
        src="/images/network-state.png"
        height="144px"
        width="280.83px"
        alt="no-network"
      />
      <div className="text-center space-y-1  ">
        <p className="text-[24px] font-[700]">{title}</p>
        <p className="text-[14px] font-[400] text-[#838282]">{message}</p>
      </div>
      <form
        onSubmit={(a: React.FormEvent<HTMLFormElement>) => action && action(a)}
        className="flex justify-center  w-full "
      >
        <button
          type="submit"
          className="border-none text-blue-base focus:border-none focus:outline-none text-center focus:ring-0 font-[600] text-[15px]"
        >
          Retry
        </button>
      </form>
    </div>
  );
};

export default ErrorState;
