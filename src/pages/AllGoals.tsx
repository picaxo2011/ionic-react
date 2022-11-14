import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import CoursesContext from "../data/courses-context";

const AllGoals: React.FC = () => {
  const coursesContext = useContext(CoursesContext);
  const filterGoals = coursesContext.courses.filter((g) => g.included);
  const goals =
    filterGoals.length > 0
      ? filterGoals
          .map((c) => {
            return c.goals.map((goal) => {
              return { ...goal, courseTitle: c.title };
            });
          })
          .reduce((goalArr, nestedGoal) => {
            let updatedGoalArr = goalArr;
            for (const goal of nestedGoal) {
              updatedGoalArr = updatedGoalArr.concat(goal);
            }
            return updatedGoalArr;
          })
      : [];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {goals.length === 0 && (
          <h2 className="ion-text-center">No goals found!</h2>
        )}
        {goals.length > 0 &&
          goals.map((g) => {
            return (
              <IonItem key={g.id}>
                <IonLabel>
                  <h2>{g.text}</h2>
                  <h3>{g.courseTitle}</h3>
                </IonLabel>
              </IonItem>
            );
          })}
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
