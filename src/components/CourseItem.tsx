import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";
import React from "react";

const CourseItem: React.FC<{
  id: string;
  title: string;
  encrolledDate: Date;
}> = (props) => {
  return (
    <IonRow>
      <IonCol size-md="4" offset-md="4">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{props.title}</IonCardTitle>
            <IonCardSubtitle>
              Encrolled on{" "}
              {props.encrolledDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="ion-text-right">
              <IonButton
                fill="clear"
                color="secondary"
                routerLink={`/courses/${props.id}`}
              >
                View Course Goal
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default CourseItem;
