import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";

const EditModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  editedGoal: { id: string; text: string } | null;
  onSave: (text: string) => void;
}> = (props) => {
  const [error, setError] = useState("");
  const textRef = useRef<HTMLIonInputElement>(null);
  const saveHandler = () => {
    const enteredText = textRef.current!.value;
    if (!enteredText || enteredText.toString().trim().length === 0) {
      setError("Please enter a valid text!");
      return;
    }
    props.onSave(enteredText.toString());
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Goal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel position="floating">
                {props.editedGoal ? "Edit" : "Add "} Your goal
              </IonLabel>
              <IonInput
                type="text"
                value={props.editedGoal?.text}
                ref={textRef}
              />
            </IonCol>
          </IonRow>
          {error && (
            <IonRow>
              <IonCol>
                <IonInput color="danger">
                  <p>{error}</p>
                </IonInput>
              </IonCol>
            </IonRow>
          )}
          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton fill="clear" color="dark" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default EditModal;
