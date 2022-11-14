import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "./theme/theme.css";

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
import Courses from "./pages/Courses";
import CourseGoals from "./pages/CourseGoals";
import { list, options, trophyOutline } from "ionicons/icons";
import AllGoals from "./pages/AllGoals";
import Filter from "./components/Filter";
import CourseTabs from "./pages/CourseTabs";
import SideDrawer from "./components/SideDrawer";
import CoursesContextProvider from "./data/CourseContextProvider";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <SideDrawer />
        <CoursesContextProvider>
          <IonRouterOutlet id="main">
            <Route path="/filter" exact>
              <Filter />
            </Route>
            <Route path="/courses">
              <CourseTabs />
            </Route>
            <Redirect path="" to="/courses/all-goals" exact />
          </IonRouterOutlet>
        </CoursesContextProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
