import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refresh } from "ionicons/icons";

const BmiControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonRow className="ion-margin-top">
      <IonCol size="12" size-md="6" className="ion-text-center">
        <IonButton expand="block" onClick={props.onCalculate} color="secondary">
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol size="12" size-md="6" className="ion-text-center">
        <IonButton color="medium" fill="clear" onClick={props.onReset}>
          <IonIcon slot="start" icon={refresh} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
