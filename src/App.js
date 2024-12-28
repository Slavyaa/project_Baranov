import './App.css';
import 'animate.css';
import imgLogo from "./images/logo.png";
import imgLowPrice from "./images/lowPrice.png";
import imgMaterials from "./images/materials.png";
import imgSofa from "./images/sofa2.png";
import imgChange from "./images/sofaCHB.png";
import imgPhone from "./images/phone.png";
import imgMail from "./images/mail.png";
import imgLocate from "./images/locate.png";
import imgTG from "./images/tg.png";
import imgViber from "./images/viber.png";
import imgMap from "./images/map.png";

import Form from "./components/Form";
import FormValid from "./components/FormValid";
import FavoriteBlock from "./components/FavoriteBlock";
import ServiceBlock from "./components/ServiceBlock";
import FAQBlock from "./components/FAQBlock";
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header'; 

import imgCar from "./components/FavoriteBlocksImg/car.png";
import imgDogovor from "./components/FavoriteBlocksImg/dogovor.png";
import imgGrant from "./components/FavoriteBlocksImg/grant.png";
import imgMatiral from "./components/FavoriteBlocksImg/materital.png";
import imgSofaBlock from "./components/FavoriteBlocksImg/sofaBlock.png";
import imgMoney from "./components/FavoriteBlocksImg/money.png";

import imgCat from "./components/ServicesBlockImg/cat.png";
import imgMatras from "./components/ServicesBlockImg/matras.png";
import imgKarkas from "./components/ServicesBlockImg/karkas.png";
import imgNapoln from "./components/ServicesBlockImg/napoln.png";
import imgMeha from "./components/ServicesBlockImg/meha.png";

import img11yo from "./components/FavoriteBlocksImg/11let3.png";
import img3ceha from "./components/FavoriteBlocksImg/3ceha.png";
import img5kservice from "./components/FavoriteBlocksImg/5kservice.png";
import imgMaster from "./components/FavoriteBlocksImg/master.png";
import img6dney from "./components/FavoriteBlocksImg/6dney.png";
import imgPig from "./components/FavoriteBlocksImg/pig.png";


function App() {



  return (
    <div>
      <ScrollToTop />
      <div className="back">
      <header className="header">
        <Header />
    </header>



    <section id="about" className="hero">
        <img className="sofa" src={imgSofa} alt="Диван" />
        <div className="hero-text">
            <h1 className='animate__animated animate__fadeInDown'>Ремонт и перетяжка</h1>
            <h1 className='animate__animated animate__fadeInDown'>Мебели</h1>
            <p>Восстановим прежний вид старой мебели, сохраним ваш бюджет</p>
            <div className="features">
              <div>
                  <img src={imgLowPrice} alt="Иконка цены" />
                  <p>Самые низкие <br/> цены</p>
              </div>
              <div>
                  <img src={imgMaterials} alt="Иконка качества" />
                  <p>Качественные материалы</p>
              </div>
            </div>
            <button className={`btn animate__animated animate__pulse animate__infinite`}>Узнать стоимость</button>
        </div>
        
        
    </section>
    </div>


    <section id="calculate" className='price'>
      <div className='section_left'>
        <p className='price_text'>
          Восстановим прежний вид старой мебели, сохраним до 70% вашего бюджета
        </p>
        <div className='blocks'>
          <FavoriteBlock img={imgCar} text="Собственная доставка мебели на производство" />
          <FavoriteBlock img={imgGrant} text="Гарантия на все наши работы 1 год"/>
          <FavoriteBlock img={imgMatiral} text="Материалы европейского качества"/>
          <FavoriteBlock img={imgDogovor} text="Работа по договору с фиксированной ценой и установленными сроками выполнения заказа"/>
          <FavoriteBlock img={imgSofaBlock} text="Реставрация и перетяжка мебели любой сложности"/>
          <FavoriteBlock img={imgMoney} text="Минимальные среднерыночные цены"/>
        </div>

      </div>
      <div className='section_right'>
        <Form />
      </div>
    </section>



    <section id="services" className='services'>
      <h1>Наши услуги</h1>
      <div className='icons'>
        <div className='left_icon'>
          <ServiceBlock img={imgNapoln} text="Замена и восстановление наполнителя"/>
        </div>
        <div  className='other_icon'>
          <ServiceBlock img={imgMatras} text="Замена пружинного блока"/>
          <ServiceBlock img={imgMeha} text="Замена и ремонт механизма"/>
          <ServiceBlock img={imgKarkas} text="Ремонтируем карткас"/>
          <ServiceBlock img={imgCat} text="Делаем замену обивки"/>
        </div>
      </div>
    </section>


    <section id="digits" className='digits'>
      <h1>Мы в цифрах</h1>
      <div className='icons'>
          <FavoriteBlock img={img11yo} text="11 лет непрерывной работы"/>
          <FavoriteBlock img={img3ceha} text="Три производственных цеха общей площадью 400 м2"/>
          <FavoriteBlock img={img5kservice} text="Более 5000 выполненных заказов"/>
          <FavoriteBlock img={imgMaster} text="Более 5000 выполненных заказов"/>
          <FavoriteBlock img={img6dney} text="6 дней - средний срок выполнения заказа"/>
          <FavoriteBlock img={imgPig} text="Экономия до 70% от стоимости новой мебели"/>
      </div>
    </section>





    <section id="application" className='change'>
      <div className='section_left'>
        <h1 className='text'>
          Хотите полностью изменить форму и дизайн вашей старой мебели?
        </h1>
        <p>
          Мы готовы это сделать по вашим рисункам, эскизам, или фотографиям.
        </p>
        <img className='change_img' src={imgChange} alt='cat'/>

      </div>
      <div className='section_right'>
        <FormValid />
      </div>

    </section>



    <section id="faq" className='faq'>
      <h1>FAQ</h1>
      <div className='icons'>
        <div className='column'>
        <FAQBlock
          question="Забирать у меня мебель для ремонта обязательно?"
          answer="Да, так как в домашних условиях провести профессиональный ремонт и перетяжку мебели попросту не представляется возможным. Для выполнения качественного ремонта и перетяжки используется профессиональное стационарное оборудование, которое имеет большие габариты и вес и которое невозможно привезти на дом к клиенту."
        />
          <FAQBlock
          question="Какой срок выполнение заказа?"
          answer="Специалисты нашей компании стараются выполнить каждый заказ как можно быстрее. Однако, учитывая статистику заказов, средний срок выполнения одного проекта составляет 5-10 дней."
        />
          <FAQBlock
          question="Как производится оплата за заказ?"
          answer="Каждый проект оформляется на основе оговоренного с заказчиком и подписанного двумя сторонами договора. За каждый заказ придется внести определенный процент предоплаты, остальная сумма оплачивается по принятию проекта заказчиком."
        />
          <FAQBlock
          question="Если я отдаю на ремонт несколько объектов мебели, будет ли скидка?"
          answer="Да, чем больше мебели Вы отдаете в работу, тем больше будет скидка."
        />
        </div>
        <div className='column'>
        <FAQBlock
          question="Какая цена на перетяжку мебели или создание ее нового дизайна?"
          answer="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        />
                <FAQBlock
          question="Есть возможность заказать замену только наполнителя для мягкой мебели?"
          answer="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
        />
                        <FAQBlock
          question="Вы проводите замену обивки и наполнителя мебели, если материал мой?"
          answer="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
        </div>
      </div>
    </section>




    <section id='contact' className='map'>
      
      <div className='map_block'>
          <h1>
            Контакты
          </h1>
          <div className='phone'>
          <img src={imgPhone} alt='' />
          <p>
            +38 (093) 274-00-95
          </p>
          </div>
          <div className='locate'>
          <img src={imgLocate} alt='' />
          <p>
          г.Харьков, ул.Приморская 2
          </p>
          </div>
          <div className='mail'>
          <img src={imgMail} alt='' />
          <p>
            mail@gmail.com
          </p>
          </div>
          <h1>
            Соцсети
          </h1>
          <div className='social'>
          <img src={imgTG} alt='' />
          <img src={imgViber} alt='' />
          </div>
      </div>

        <img className='back_map' src={imgMap} alt='' />

    </section>

    <footer>
      <img src={imgLogo} alt='' />
      <p>
        @Remont_mebeli
      </p>


    </footer>





    </div>
    
  );
}

export default App;
