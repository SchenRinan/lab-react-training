import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';

import { useState } from 'react';

function App() {
  const [showIdCard, setIdCard] = useState(false);
  const [showGreetings, setGreetings] = useState(false);
  const [showRandom, setRandom] = useState(false);
  const [showBoxColor, setBoxColor] = useState(false);
  const [showCreditCard, setCreditCard] = useState(false);
  const [showRating, setRating] = useState(false);
  const [showDriverCard, setDriverCard] = useState(false);
  const [showLikeButton, setLikeButton] = useState(false);
  const [showClickablePicture, setClickablePicture] = useState(false);
  const [showDice, setDice] = useState(false);
  const [showCarousel, setCarousel] = useState(false);
  const [showNumbersTable, setNumbersTable] = useState(false);
  const [showFaceBook, setFaceBook] = useState(false);
  const [showSignupPage, setSignupPage] = useState(false);
  const [showRGBColorPicker, setRGBColorPicker] = useState(false);

  return (
    <div className="App">
      <h1>IdCard</h1>
      <button onClick={()=>setIdCard(!showIdCard)}>{showIdCard ? 'Hide':'Show'}</button><br/>
      {showIdCard && <>
      <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /></> }

      <h1>Greetings</h1>
      <button onClick={()=>setGreetings(!showGreetings)}>{showGreetings ? 'Hide':'Show'}</button><br/>
      {showGreetings && <>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      </>}

      <h1>Random</h1>
      <button onClick={()=>setRandom(!showRandom)}>{showRandom ? 'Hide':'Show'}</button><br/>
      {showRandom && <>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      </>}

      <h1>BoxColor</h1>
      <button onClick={()=>setBoxColor(!showBoxColor)}>{showBoxColor ? 'Hide':'Show'}</button><br/>
      {showBoxColor && <>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </>}

      <h1>CreditCard</h1>
      <button onClick={()=>setCreditCard(!showCreditCard)}>{showCreditCard ? 'Hide':'Show'}</button><br/>
      {showCreditCard && <>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      </>}
      
      <h1>Rating</h1>
      <button onClick={()=>setRating(!showRating)}>{showRating ? 'Hide':'Show'}</button><br/>
      {showRating && <>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </>}
      
      <h1>DriverCard</h1>
      <button onClick={()=>setDriverCard(!showDriverCard)}>{showDriverCard ? 'Hide':'Show'}</button><br/>
      {showDriverCard && <>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
      </>}

      <h1>LikeButton</h1>
      <button onClick={()=>setLikeButton(!showLikeButton)}>{showLikeButton ? 'Hide':'Show'}</button><br/>
      {showLikeButton && 
      <LikeButton />
      }

      <h1>ClickablePicture</h1>
      <button onClick={()=>setClickablePicture(!showClickablePicture)}>{showClickablePicture ? 'Hide':'Show'}</button><br/>
      {showClickablePicture && 
      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />}

      <h1>Dice</h1>
      <button onClick={()=>setDice(!showDice)}>{showDice ? 'Hide':'Show'}</button><br/>
      {showDice && 
      <Dice />}

      <h1>Carousel</h1>
      <button onClick={()=>setCarousel(!showCarousel)}>{showCarousel ? 'Hide':'Show'}</button><br/>
      {showCarousel && 
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />}

      <h1>NumbersTable</h1>
      <button onClick={()=>setNumbersTable(!showNumbersTable)}>{showNumbersTable ? 'Hide':'Show'}</button><br/>
      {showNumbersTable && 
      <NumbersTable limit={12} />}

      <h1>FaceBook</h1>
      <button onClick={()=>setFaceBook(!showFaceBook)}>{showFaceBook ? 'Hide':'Show'}</button><br/>
      {showFaceBook && <>
      <FaceBook />
      </>}

      <h1>SignupPage</h1>
      <button onClick={()=>setSignupPage(!showSignupPage)}>{showSignupPage ? 'Hide':'Show'}</button><br/>
      {showSignupPage && <SignupPage />}

      <h1>RGBColorPicker</h1>
      <button onClick={()=>setRGBColorPicker(!showRGBColorPicker)}>{showRGBColorPicker ? 'Hide':'Show'}</button><br/>
      {showRGBColorPicker && <RGBColorPicker />}
    </div>
  );
}

export default App;
