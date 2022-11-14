import { IonItemSlidingCustomEvent } from "@ionic/core";
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";
import React from "react";

const EditableGoalItem: React.FC<{
  slidingOptionRef: React.Ref<HTMLIonItemSlidingElement>;
  onStartDelete: () => void;
  onStartEdit: (event: React.MouseEvent) => void;
  text: string;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingOptionRef}>
      <IonItemOptions side="start">
        <IonItemOption onClick={props.onStartDelete} color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
      </IonItemOptions>

      <IonItem lines="full">
        <IonLabel>{props.text}</IonLabel>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={props.onStartEdit}>
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
