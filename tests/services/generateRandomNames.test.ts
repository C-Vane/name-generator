import {  namesService} from "../../src/services/generateRandomNames";
import * as chai from "chai";
import { expect } from "chai";

chai.use(require("chai-json-schema"));
chai.use(require("chai-match"));

describe("Random Names Service", () => {
  it("on given empty array returns empty array", async () => {
    const expectedFlag = 0;
    const mockList=[]
    const resultFlag: String[] = namesService.generateRandomNames(mockList);
    expect(resultFlag).to.be.length(expectedFlag);
  });
  it("on given array of names less then 5 returns given array", async () => {
    const expectedFlag = 3;
    const mockList=["Ringruth","Bridheaks","Scaal"]
    const resultFlag: String[] = namesService.generateRandomNames(mockList)
    expect(resultFlag).to.be.length(expectedFlag);
  });
  it("on given array of names returns an array of max 5 random names", async () => {
    const expectedFlag = 5;
    const mockList=[
    "Ringruth",
    "Bridheaks",
    "Scaal",
    "Ghaels",
    "Ghov'eds",
    "Xarkriex",
    "Ielphi",
    "Bhun'id",
    "Eil'e",
    "Dhengex",
    "Throqaids",
    "Bax'oi"]
    const resultFlag: String[] = namesService.generateRandomNames(mockList);
    expect(resultFlag).to.be.length(expectedFlag).lessThanOrEqual;
  });
});
