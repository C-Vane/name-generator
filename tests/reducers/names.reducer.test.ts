import * as chai from "chai";
import { expect } from "chai";
import { namesUpdateAction } from "../../src/actions/names.actions";
import { namesReducer } from "../../src/reducers/names.reducer";

chai.use(require("chai-json-schema"));
chai.use(require("chai-match"));

describe("namesReducer", () => {
  it("returns the initial state on undefined action", () => {
    expect(namesReducer(undefined, { type: null })).to.eql({
      names: [],
    });
  });

  describe("UPDATE_RANDOM_NAMES", () => {
    it("returns array of max five names on array payload", () => {
      const listNames: String[] = ["Hanna","Luisa","Mac"];
      expect(
        namesReducer(
          undefined,
          namesUpdateAction(listNames)
        )
      ).to.eql({
        names: listNames,
      });
    });
  });
});
