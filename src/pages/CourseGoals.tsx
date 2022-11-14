import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import { addOutline, create, trash } from "ionicons/icons";
import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router";
import EditModal from "../components/EditModal";
import { COURSE_DATA } from "./Courses";
import EditableGoalItem from "../components/EditableGoalItem";
import CoursesContext from "../data/courses-context";

const CourseGoals: React.FC = () => {
  const [startDeleting, setStartDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<{
    id: string;
    text: string;
  } | null>(null);
  const courseCtx = useContext(CoursesContext);
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const selectedCourse = courseCtx.courses.find(
    (c) => c.id === selectedCourseId
  );
  const selectingGoalOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const selectedGoalRef = useRef<string | null>(null);

  const startDeleteGoalHandler = (goalId: string) => {
    setToastMessage("");
    setStartDeleting(true);
    selectedGoalRef.current = goalId;
  };

  const deleteItemHandler = () => {
    setStartDeleting(false);
    courseCtx.deleteGoal(selectedCourseId, selectedGoalRef.current!);
    setToastMessage("Deleted goal!");
  };

  const startEditItemHandler = (goalId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    selectingGoalOptionsRef.current?.closeOpened();
    const goal = selectedCourse?.goals
      ? selectedCourse.goals.find((g) => g.id === goalId)
      : null;
    if (!goal) {
      return;
    }
    setIsEditing(true);
    setSelectedGoal(goal);
  };

  const startAddItemHandler = () => {
    setIsEditing(true);
    setSelectedGoal(null);
  };

  const cancelEditGoalHandler = () => {
    setIsEditing(false);
  };

  const saveGoalHandler = (text: string) => {
    if (selectedGoal) {
      courseCtx.updateGoal(selectedCourseId, selectedGoal.id, text);
    } else {
      courseCtx.addGoal(selectedCourseId, text);
    }
    setIsEditing(false);
  };

  let content = <h2 className="ion-text-center">No goals found!</h2>;

  if (!selectedCourse) {
    content = <h2 className="ion-text-center">No courses found!</h2>;
  }

  if (selectedCourse && selectedCourse.goals.length > 0) {
    content = (
      <IonList>
        {selectedCourse.goals.map((goal) => (
          <EditableGoalItem
            key={goal.id}
            slidingOptionRef={selectingGoalOptionsRef}
            onStartDelete={startDeleteGoalHandler.bind(null, goal.id)}
            onStartEdit={startEditItemHandler.bind(null, goal.id)}
            text={goal.text}
          />
        ))}
      </IonList>
    );
  }

  return (
    <>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
        onSave={saveGoalHandler}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        // bad practice => warning rerender state
        // duration={2000}
        // onDidDismiss={() => {
        //   setToastMessage("");
        // }}
      ></IonToast>
      <IonAlert
        isOpen={startDeleting}
        header="Are you sure?"
        message="Do you want to delete the goal? This cannot be undone."
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartDeleting(false);
            },
          },
          {
            text: "Yes1",
            handler: deleteItemHandler,
          },
        ]}
      ></IonAlert>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/courses/list" />
            </IonButtons>
            <IonTitle>
              {selectedCourse ? selectedCourse?.title : "No course found"}
            </IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddItemHandler}>
                  <IonIcon icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {content}
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddItemHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default CourseGoals;
