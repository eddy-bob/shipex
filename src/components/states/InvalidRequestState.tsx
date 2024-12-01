interface IProps {
  title?: string;
  message?: string;
}
const InvalidRequestState = ({
  title = "query",
  message = `Enter a valid ${title} to display details`,
}: IProps) => {
  return (
    <>
      <div className="flex justify-center flex-col space-y-7 ">
        <img
          src="/images/invalid.png"
          height="144px"
          width="280.83px"
          alt="invalid"
        />
        <div className="text-center">
          <p className="text-[15px] font-[500] text-[#6B7280]">{message}</p>
        </div>
      </div>
    </>
  );
};

export default InvalidRequestState;
