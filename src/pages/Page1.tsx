import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";

const Page1: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>

                    </IonButtons>
                    <IonTitle>Page1</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>

    );
};
export default Page1;
