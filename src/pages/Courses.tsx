import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import { title } from "process";
import { stringify } from "querystring";
import React, { useContext, useState } from "react";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";
import CoursesContext from "../data/courses-context";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "Ionic + React - The Practical Guide",
    encrolled: new Date("11/10/2022"),
    goals: [
      { id: "c1g1", text: "Finish course" },
      { id: "c1g2", text: "Learn a lot" },
      { id: "c1g3", text: "Learn a lot" },
      { id: "c1g4", text: "Learn a lot" },
      { id: "c1g5", text: "Learn a lot" },
      { id: "c1g6", text: "Learn a lot" },
      { id: "c1g7", text: "Learn a lot" },
      { id: "c1g8", text: "Learn a lot" },
      { id: "c1g9", text: "Learn a lot" },
      { id: "c1g10", text: "Learn a lot" },
      { id: "c1g11", text: "Learn a lot" },
      { id: "c1g12", text: "Learn a lot" },
      { id: "c1g13", text: "Learn a lot" },
      { id: "c1g14", text: "Learn a lot" },
      { id: "c1g15", text: "Learn a lot" },
      { id: "c1g16", text: "Learn a lot" },
      { id: "c1g17", text: "Learn a lot" },
      { id: "c1g18", text: "Learn a lot" },
      { id: "c1g19", text: "Learn a lot" },
    ],
  },
  {
    id: "c2",
    title: "React.js - The Complete Guide",
    encrolled: new Date("12/10/2022"),
    goals: [
      { id: "c2g1", text: "Finish course" },
      { id: "c2g2", text: "Learn a lot" },
    ],
  },
  {
    id: "c3",
    title: "Javascript - The Practical Guide",
    encrolled: new Date("01/10/2022"),
    goals: [
      { id: "c3g1", text: "Finish course" },
      { id: "c3g2", text: "Learn a lot" },
    ],
  },
];

const Courses: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const coursesCtx = useContext(CoursesContext);

  const startAddItemHandler = () => {
    setIsAdding(true);
    setSelectedCourse(null);
  };

  const cancelEditCourseHandler = () => {
    setIsAdding(false);
  };

  const saveHandler = (title: string, date: Date) => {
    coursesCtx.addCourse(title, date);
    setIsAdding(false);
  };

  return (
    <>
      <AddCourseModal
        show={isAdding}
        onCancel={cancelEditCourseHandler}
        onSave={saveHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {coursesCtx.courses.map((course) => (
            <CourseItem
              key={course.id}
              id={course.id}
              title={course.title}
              encrolledDate={course.encrolled}
            />
            // <IonRow key={course.id}>
            //   <IonCol size-md="4" offset-md="4">
            //     <IonCard>
            //       <IonCardHeader>
            //         <IonCardTitle>{course.title}</IonCardTitle>
            //         <IonCardSubtitle>
            //           Encrolled on{" "}
            //           {course.encrolled.toLocaleDateString("en-US", {
            //             year: "numeric",
            //             month: "2-digit",
            //             day: "2-digit",
            //           })}
            //         </IonCardSubtitle>
            //       </IonCardHeader>
            //       <IonCardContent>
            //         <div className="ion-text-right">
            //           <IonButton
            //             fill="clear"
            //             color="secondary"
            //             routerLink={`/courses/${course.id}`}
            //           >
            //             View Course Goal
            //           </IonButton>
            //         </div>
            //       </IonCardContent>
            //     </IonCard>
            //   </IonCol>
            // </IonRow>
          ))}
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="secondary">
              <IonIcon icon={addOutline} onClick={startAddItemHandler} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Courses;
