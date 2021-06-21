import {apiName} from "../../src/services";
import { randomNamesSaga } from "../../src/sagas/randomNames.saga";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as chai from "chai";
import * as sinon from "sinon";
import { expect } from "chai";
import { recordSaga } from "../utils/recordSaga";
import {
  NamesActionIds,
  namesUpdateAction,
} from "../../src/actions/names.actions";
import names from "../../src/assets/data/names.json";
chai.use(require("chai-json-schema"));
chai.use(require("chai-match"));

let sandbox: sinon.SinonSandbox;
let store: any;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialAction = {
  type: NamesActionIds.TOGGLE_NAMES,
  payload:{names:[]}
};
      
describe("toggleRandomNamesSaga", () => {
  before(() => {
    sandbox = sinon.createSandbox();
    store = mockStore();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("puts namesUpdateAction", async () => {
    const listNames: String[] = Array.from(names);
    const randomNamesGeneratorSpy = sandbox
      .stub(apiName.randomNames)
      .generateRandomNames.callsFake((listNames: String[]) => {
        return listNames;
      });
    const dispatchedActions = await recordSaga(
      randomNamesSaga,
      apiName,
      store.dispatch,
      initialAction
    );
    expect(randomNamesGeneratorSpy.calledOnceWith()).to.be;

    expect(dispatchedActions).to.deep.include(
      namesUpdateAction(listNames)
    );
  });
});
