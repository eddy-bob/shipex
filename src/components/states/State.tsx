import NotFoundState from "./NotFoundState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import InvalidRequestState from "./InvalidRequestState";
import { RenderIf } from "../shared";

export type RequstState = "not-found" | "no-result" | "network-error" | 'invalid-option';

interface IProps {
  title?: string;
    message?: string;
    type?:RequstState
  action?: () => any;
}
const State = ({ title, message, action,type='no-result' }: IProps) => {
    return (
      <>
        <RenderIf condition={type === "network-error"}>
          <ErrorState title={title} action={action} message={message} />
        </RenderIf>
        <RenderIf condition={type === "not-found"}>
          <NotFoundState title={title} action={action} message={message} />
        </RenderIf>
        <RenderIf condition={type === "invalid-option"}>
          <InvalidRequestState title={title} message={message} />
        </RenderIf>
        <RenderIf condition={type === "no-result"}>
          <EmptyState title={title} action={action} message={message} />
        </RenderIf>
      </>
    );
};

export default State;
