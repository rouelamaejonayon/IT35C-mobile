import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
              <IonCardTitle>Hello World</IonCardTitle>
              <IonCardSubtitle>It35c</IonCardSubtitle>
            </IonCardHeader>
      
            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
          </IonCard>
    </div>
  );
  
  
};

export default ExploreContainer;


