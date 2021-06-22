import { stdChannel, runSaga } from "redux-saga";
import { ApiAnimation, ApiNames } from "../../src/services";

export async function recordSaga(
  saga: any,
  api: ApiAnimation | ApiNames,
  dispatch: any,
  initialAction: { type: string; payload: any }
) {
  const dispatched = [];
  const channel = stdChannel();
  const task = runSaga(
    {
      channel,
      dispatch: (action) => dispatched.push(action),
    },
    saga,
    api,
    dispatch
  );
  channel.put(initialAction);
  // @ts-ignore
  await task.toPromise().done;
  return dispatched;
}
