import {
  IonAlert,
  IonApp,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { useRef, useState } from "react";
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";
import { InputControl } from "./components/InputControl";

setupIonicReact();

const Test: React.FC = () => {
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnit, setCalcUnit] = useState<"mkg" | "ftlbs">("mkg");

  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter a valid(non-negative) input value");
      return;
    }

    const weightConversionFactor = calcUnit === "ftlbs" ? 2.2 : 1;
    const heightConversionFactor = calcUnit === "ftlbs" ? 3.28 : 1;

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);
    setCalculatedBmi(bmi);
  };

  const resetInputs = () => {
    heightInputRef.current!.value = "";
    weightInputRef.current!.value = "";
  };

  const clearError = () => {
    setError("");
  };

  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnit(selectedValue);
  };

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Ok", handler: clearError }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator TEST</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol
                size-sm="8"
                offset-sm="2"
                size-md="6"
                offset-md="3"
                className="ion-no-padding"
              >
                <IonCard className="ion-no-margin">
                  <IonCardContent>
                    <IonGrid className="ion-no-padding">
                      <IonRow>
                        <IonCol>
                          <InputControl
                            selectedValue={calcUnit}
                            onSelectValue={selectCalcUnitHandler}
                          />
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Height (
                              {calcUnit === "mkg" ? "meters" : "feet"})
                            </IonLabel>
                            <IonInput
                              type="number"
                              ref={heightInputRef}
                            ></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Weight ({calcUnit === "mkg" ? "kgs" : "lbs"})
                            </IonLabel>
                            <IonInput
                              type="number"
                              ref={weightInputRef}
                            ></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <BmiControls
                        onCalculate={calculateBMI}
                        onReset={resetInputs}
                      />
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {calculatedBmi && <BmiResult result={calculatedBmi} />}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default Test;
