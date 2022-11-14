import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import React from "react";
import "./BmiResult.css";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonCard id="result">
      <IonCardContent className="ion-text-center">
        <h2>Your Body-Mass-Index</h2>
        <h3>{props.result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;
