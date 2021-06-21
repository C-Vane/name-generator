import { AnimationsApi, animationsService } from "./animations";
import { RandomNamesApi ,namesService } from "./generateRandomNames";

export const apiAnimation: AnimationsApi = {
  animations: animationsService,
};

export type ApiAnimation = typeof apiAnimation;

export const apiName: RandomNamesApi = {
  randomNames: namesService,
};

export type ApiNames = typeof apiName;


