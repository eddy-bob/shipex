interface IProps {
  title?: string;
  message?: string;

  action?: () => any;
}
const NotFoundState = ({
  title = "404",
  message = "Oops! The page you're looking for can't be found.",
  action,
}: IProps) => {
  return (
    <div className="flex  flex-col justify-center space-y-7 ">
      <img src="/images/not-found.png" height="144px" width="280.83px" />
      <div className="text-center space-y-1  ">
        <p className="text-[24px] font-[700]">{title}</p>
        <p className="text-[14px] font-[400] text-[#838282]">{message}</p>
      </div>
      <div className="flex justify-center w-full ">
        <button
          onClick={action}
          className="border-none text-blue-base focus:border-none focus:outline-none text-center focus:ring-0 font-[600] text-[15px]"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default NotFoundState;
