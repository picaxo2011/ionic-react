import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonNote,
  IonPopover,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { format, parseISO } from "date-fns";

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const [enrolledDate, setEnrolledDate] = useState<any>(new Date().toString());

  const [error, setError] = useState("");
  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const saveHandler = () => {
    const enteredTitle = titleRef.current!.value; // ! sure value is defined
    const selectedDate = dateRef.current!.value;

    if (
      !enteredTitle ||
      !selectedDate ||
      enteredTitle.toString().trim().length === 0
    ) {
      setError("Please enter a valid title and select a valid date.");
      return;
    }
    setError("");
    props.onSave(enteredTitle.toString(), new Date(selectedDate.toString()));
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel position="floating">Course Title</IonLabel>
              <IonInput type="text" ref={titleRef} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Enrolment Date</IonLabel>
                <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                <IonModal keepContentsMounted={true}>
                  <IonDatetime id="datetime" ref={dateRef}></IonDatetime>
                </IonModal>
              </IonItem>
            </IonCol>
          </IonRow>
          {error && (
            <IonRow>
              <IonCol>
                <IonText color="danger">
                  <p>{error}</p>
                </IonText>
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

export default AddCourseModal;
