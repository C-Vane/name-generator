import * as React from "react";
import { PageWrapper, PageContentBlock,ContentRow } from "./styles";
import SpinnerLogo from "../../components/SpinnerLogo";
import logo from "../../assets/images/logo.svg";
import { animationsToggleRotationAction } from "../../actions/animations.actions";
import { namesToggleAction } from "../../actions/names.actions";
import { useDispatch, useSelector } from "react-redux";
import StylishButton from "../../components/StylishButton";
import ListOfNames from "../../components/ListOfNames";


const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const isRotating: boolean = useSelector(
    (state: any) => state.animationsState.isRotating
  );

  const randomListOfNames: Array<String> = useSelector(
    (state: any) => state.randomNames.names
  );
  async function onToggleRotationClicked() {
    dispatch(animationsToggleRotationAction(isRotating));
  }
  async function onGenerateNamesClicked() {
    dispatch(namesToggleAction());
  }
 
 
  return (
    <PageWrapper>
      <PageContentBlock>
        <SpinnerLogo logo={logo} isSpinning={isRotating}/>
        <ContentRow>
        <StylishButton
          text={"Toggle Rotation"}
          onClick={onToggleRotationClicked}
        /> 
        <StylishButton
        text={"Generate Names"}
        onClick={onGenerateNamesClicked}
      /></ContentRow>
      <ListOfNames list={randomListOfNames}/>
      </PageContentBlock>
    </PageWrapper>
  );
};

export default MainPage;
