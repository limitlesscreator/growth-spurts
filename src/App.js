import s from './App.module.sass'
import logo from '../src/img/logo.png'
import phone from '../src/img/phone.png'
import childPic from '../src/img/childPic.png'
import elem1s1 from '../src/img/elem1s1.png'
import elem2s1 from '../src/img/elem2s1.png'
import elem3s1 from '../src/img/elem3s1.png'
import qrCode from '../src/img/qrCode.png'
import appDownload from '../src/img/appDownload.png'
import googleplay from '../src/img/googleplay.png'
import traba from '../src/img/traba.png'
import child from '../src/img/10065.gif'
import child2 from '../src/img/10009.gif'
import child3 from '../src/img/10012.gif'
import child4 from '../src/img/10011.gif'
import child5 from '../src/img/10038.gif'
import child6 from '../src/img/10030.gif'
import famuily from '../src/img/100000famuily.svg'
import review1 from '../src/img/reviewStar1.svg'
import review2 from '../src/img/reviewStar2.svg'
import phoneFirstSlide from '../src/img/phoneFirstSlide.png'
import phoneSecondSlide from '../src/img/phoneSecondSlide.png'
import phoneThirdSlide from '../src/img/phoneThirdSlide.png'
import phoneThirdFour from '../src/img/phoneThirdFour.png'
import review3 from '../src/img/reviewStar3.svg'
import bunny from '../src/img/bunny.png'
import inst from '../src/img/insta.png'
import telegram from '../src/img/telegram.png'
import {useState} from "react";
import './App.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function App() {

    const [language, setLanguage] = useState('RU')

    return (
        <>
            <div className={s.container}>
                <header>
                    <img className={s.logo} src={logo} alt="logo"/>
                    <div className={s.linksHeader}>
                        <a href={'#'}>О приложении</a>
                        <a href={'#'}>Упражнения</a>
                        <a href={'#'}>FAQ</a>
                        <a href={'#'}>Отзывы </a>
                    </div>
                    <div className={s.buttonsHeader}>
                        <div className={`dropdown ${s.ourStyleTranslateBtn}`}>
                            <a className="btn  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                {language}
                            </a>

                            <ul className="dropdown-menu">
                                <a onClick={() => {
                                    setLanguage(language === 'RU' ? "ENG" : "RU")
                                }} className={`dropdown-item ${s.engBtn}`}>{language === 'RU' ? "ENG" : "RU"}</a>
                            </ul>
                        </div>
                        <button className={s.download}>Скачать</button>
                    </div>

                </header>
            </div>
            <div className={s.container}>
                <div className={s.section1}>
                    <div className={s.leftSideSection1} id={'leftSide'}>
                        <h2>Создано родителями для родителей –
                            при поддержке педиатров</h2>
                        <div className={`${s.elemS1} ${s.marginForElem}`}>
                            <img src={elem1s1} alt="elem1s1"/>
                            Дневник замеров роста, веса, охватов
                        </div>
                        <div className={s.elemS1}>
                            <img src={elem2s1} alt="elem2s1"/>
                            Трекер сна, кормления, смены памперсов
                        </div>
                        <div className={s.elemS1}>
                            <img src={elem3s1} alt="elem3s1"/>
                            Календарь скачков роста*
                        </div>
                        <img src={elem1s1} className={s.child} src={childPic} alt="child"/>
                    </div>
                    <div>
                        <img className={s.phone} src={phone} alt="phone"/>
                        <img className={s.phoneDisplayOnMobile} src={phone} alt="phone"/>

                    </div>

                </div>

                <div className={s.section2}>
                    <div className={s.showOnMobileApllePlay}>
                        <a href="https://itunes.apple.com/cy/app/id1662980687/id1662980687?mt=8"><img
                            className={s.downloadApp} src={appDownload} alt=""/></a>
                        <a href="https://play.google.com/store/apps/details?id=happy.mom.android"><img
                            className={s.downloadApp} src={googleplay} alt=""/></a>
                    </div>
                    <div className={s.qrCode}>
                        <img src={qrCode} className={s.qrCodeImg} alt="qrCopde"/>
                        <div>
                            Сканируйте QR-код, чтобы попробовать
                            приложение уже сегодня
                            <div className={s.subTitle}>
                                Это бесплатно. И безопасно
                                <a href="https://itunes.apple.com/cy/app/id1662980687/id1662980687?mt=8"><img
                                    className={s.downloadApp} src={appDownload} alt=""/></a>
                                <a href="https://play.google.com/store/apps/details?id=happy.mom.android"><img
                                    className={s.downloadApp} src={googleplay} alt=""/></a>

                            </div>
                        </div>
                    </div>

                    <div className={s.weHaveTrust}>
                        <img className={s.leftSideGrass} src={traba} alt="img"/>
                        <img className={s.rightSideGrass} src={traba} alt="img"/>

                        Нам доверяют самое важное <br/>
                        100 000+ мам и пап
                        <div className={s.reviews}>
                            <div><b>4.9</b> App Store</div>
                            <div style={{marginLeft: '20px'}}><b>4.8</b> GooglePlay</div>
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop: '120px'}}>Растём вместе. <br/>
                    С каждым скачком</h3>
                <div className={s.section3}>
                    <Swiper
                        onAnimationStart={() => console.log('started')}
                        direction={'vertical'}
                        pagination={{
                            clickable: false,
                        }}
                        speed={1000}
                        mousewheel={true}
                        modules={[Mousewheel, Pagination]}
                        className="swiper"
                        loop={true}

                        /*WORKING BELLOW*/
                        onSlideChange={(e) => {
                            // is swiping? then check current index and add opacity to previous
                            if (e.realIndex === 1) {
                                document.querySelector(`.${s.phoneSlide1}`).style.opacity = 0
                                document.querySelector(`.${s.phoneSlide2}`).style.opacity = 1
                                document.querySelector(`.${s.phoneSlide4}`).style.opacity = 1

                                document.querySelector(`.${s.leftSlideText1}`).style.opacity = 0
                                document.querySelector(`.${s.leftSlideText2}`).style.opacity = 1
                                document.querySelector(`.${s.leftSlideText4}`).style.opacity = 1

                                document.querySelector(`.${s.secondTextSlideOne}`).style.opacity = 0
                                document.querySelector(`.${s.secondTextSlideTwo}`).style.opacity = 1
                                document.querySelector(`.${s.secondTextSlideFour}`).style.opacity = 1


                            }
                            if (e.realIndex === 2) {
                                document.querySelector(`.${s.phoneSlide2}`).style.opacity = 0
                                document.querySelector(`.${s.phoneSlide1}`).style.opacity = 1
                                document.querySelector(`.${s.phoneSlide3}`).style.opacity = 1

                                document.querySelector(`.${s.leftSlideText2}`).style.opacity = 0
                                document.querySelector(`.${s.leftSlideText1}`).style.opacity = 1
                                document.querySelector(`.${s.leftSlideText3}`).style.opacity = 1

                                document.querySelector(`.${s.secondTextSlideTwo}`).style.opacity = 0
                                document.querySelector(`.${s.secondTextSlideOne}`).style.opacity = 1
                                document.querySelector(`.${s.secondTextSlideThree}`).style.opacity = 1

                            }
                            if (e.realIndex === 3) {
                                document.querySelector(`.${s.phoneSlide3}`).style.opacity = 0
                                document.querySelector(`.${s.phoneSlide2}`).style.opacity = 1
                                document.querySelector(`.${s.phoneSlide4}`).style.opacity = 1

                                document.querySelector(`.${s.leftSlideText3}`).style.opacity = 0
                                document.querySelector(`.${s.leftSlideText2}`).style.opacity = 1
                                document.querySelector(`.${s.leftSlideText4}`).style.opacity = 1

                                document.querySelector(`.${s.secondTextSlideThree}`).style.opacity = 0
                                document.querySelector(`.${s.secondTextSlideTwo}`).style.opacity = 1
                                document.querySelector(`.${s.secondTextSlideFour}`).style.opacity = 1


                            }
                            if (e.realIndex === 0) {
                                document.querySelector(`.${s.phoneSlide4}`).style.opacity = 0
                                document.querySelector(`.${s.phoneSlide3}`).style.opacity = 1
                                document.querySelector(`.${s.phoneSlide1}`).style.opacity = 1

                                document.querySelector(`.${s.leftSlideText4}`).style.opacity = 0
                                document.querySelector(`.${s.leftSlideText3}`).style.opacity = 1
                                document.querySelector(`.${s.leftSlideText1}`).style.opacity = 1

                                document.querySelector(`.${s.secondTextSlideFour}`).style.opacity = 0
                                document.querySelector(`.${s.secondTextSlideThree}`).style.opacity = 1
                                document.querySelector(`.${s.secondTextSlideOne}`).style.opacity = 1
                            }

                        }}
                    >
                        <SwiperSlide className={s.elemSlide}>
                            <div className={s.leftSlideText1}>Календарь <br/>
                                скачков роста
                            </div>
                            <div className={s.secondTextSlideOneMobile}>Показываем скачки роста в календаре и вместе с
                                педиатрами рассказываем, что происходит с малышом до 78 недели.
                            </div>

                            <div>
                                <img className={s.phoneSlide1} src={phoneFirstSlide} alt="phone"/>
                            </div>
                            <div className={s.secondTextSlideOne}>Показываем скачки роста в календаре и вместе с
                                педиатрами рассказываем, что происходит с малышом до 78 недели.
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className={s.elemSlide}>
                            <div className={s.leftSlideText2}>Трекеры сна, кормления, смены памперсов, сцеживания <br/>
                                и настроения ребенка
                            </div>
                            <div className={s.secondTextSlideTwoMobile}>Вся важная информация о распорядке дня и
                                ежедневной рутине ребёнка – в одном приложении.
                            </div>

                            <div>
                                <img className={s.phoneSlide2} src={phoneSecondSlide} alt="phone"/>
                            </div>
                            <div className={s.secondTextSlideTwo}>Вся важная информация о распорядке дня и ежедневной
                                рутине ребёнка – в одном приложении.
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className={s.elemSlide}>
                            <div className={s.leftSlideText3}>Замеры роста, <br/> веса, охватов</div>
                            <div className={s.secondTextSlideThreeMobile}>Фиксируйте ключевые цифры о росте вашего
                                ребёнка – и отслеживайте, как они меняются. Сверяйтесь с нормами Всемирной организации
                                здравоохранения.
                            </div>

                            <div>
                                <img className={s.phoneSlide3} src={phoneThirdSlide} alt="phone"/>
                            </div>
                            <div className={s.secondTextSlideThree}>Фиксируйте ключевые цифры о росте вашего ребёнка – и
                                отслеживайте, как они меняются. Сверяйтесь с нормами Всемирной организации
                                здравоохранения.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={s.elemSlide}>
                            <div className={s.leftSlideText4}>Дневник важных <br/> сердцу моментов</div>
                            <div className={s.secondTextSlideFourMobile}>Первые улыбка, зуб, шаг – сохраняйте важные
                                события. А мы создадим видео, которым можно поделиться в соцсетях и мессенджерах с
                                семьей и друзьями.
                            </div>

                            <div>
                                <img className={s.phoneSlide4} src={phoneThirdFour} alt="phone"/>
                            </div>
                            <div className={s.secondTextSlideFour}>Первые улыбка, зуб, шаг – сохраняйте важные события.
                                А мы создадим видео, которым можно поделиться в соцсетях и мессенджерах с семьей и
                                друзьями.
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <h3 style={{marginTop: '120px'}}>Тигр на ветке, Маракасы, Чудеса <br/>
                    и ещё 250+ развивающих упражнений м</h3>
                <h4>Их выполнение займёт не больше 20 минут в день </h4>

                <div className={s.corouselChild}>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className={s.threeChild}>
                                    <div className={s.childInThree}>
                                        <div className={s.titleInCard}>
                                            “Jump, skip, skip”
                                        </div>
                                        <img className={s.imgChild} src={child}></img>
                                        <div className={s.subTitleChild}>
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                            have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>
                                    <div className={s.childInThree}>
                                        <div className={s.titleInCard}>
                                            “Jump, skip, skip”
                                        </div>
                                        <img className={s.imgChild} src={child2}></img>
                                        <div className={s.subTitleChild}>
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                            have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>
                                    <div className={s.childInThree}>
                                        <div className={s.titleInCard}>
                                            “Jump, skip, skip”
                                        </div>
                                        <img className={s.imgChild} src={child3}></img>
                                        <div className={s.subTitleChild}>
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                            have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className={s.threeChild}>
                                    <div className={s.childInThree}>
                                        <div className={s.titleInCard}>
                                            “Jump, skip, skip”
                                        </div>
                                        <img className={s.imgChild} src={child4}></img>
                                        <div className={s.subTitleChild}>
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                            have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>
                                    <div className={s.childInThree}>
                                        <div className={s.titleInCard}>
                                            “Jump, skip, skip”
                                        </div>
                                        <img className={s.imgChild} src={child5}></img>
                                        <div className={s.subTitleChild}>
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                            have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>
                                    <div className={s.childInThree}>
                                        <div className={s.titleInCard}>
                                            “Jump, skip, skip”
                                        </div>
                                        <img className={s.imgChild} src={child6}></img>
                                        <div className={s.subTitleChild}>
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                            have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className={`carousel-control-prev ${s.ownStyleForLeftCarousel}`} type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className={`carousel-control-next ${s.ownStyleForRightCarousel}`} type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className={s.coruselChildMobile}>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <div className={s.childInThree}>
                                <div className={s.titleInCard}>
                                    “Jump, skip, skip”
                                </div>
                                <img className={s.imgChild} src={child}></img>
                                <div className={s.subTitleChild}>
                                    Hold your baby upright by the armpits and do a jump-skip, so that the feet have
                                    support under them.
                                    <br/> <br/>
                                    The baby's weight is completely in your hands!
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.childInThree}>
                                <div className={s.titleInCard}>
                                    “Jump, skip, skip”
                                </div>
                                <img className={s.imgChild} src={child2}></img>
                                <div className={s.subTitleChild}>
                                    Hold your baby upright by the armpits and do a jump-skip, so that the feet have
                                    support under them.
                                    <br/> <br/>
                                    The baby's weight is completely in your hands!
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.childInThree}>
                                <div className={s.titleInCard}>
                                    “Jump, skip, skip”
                                </div>
                                <img className={s.imgChild} src={child3}></img>
                                <div className={s.subTitleChild}>
                                    Hold your baby upright by the armpits and do a jump-skip, so that the feet have
                                    support under them.
                                    <br/> <br/>
                                    The baby's weight is completely in your hands!
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.childInThree}>
                                <div className={s.titleInCard}>
                                    “Jump, skip, skip”
                                </div>
                                <img className={s.imgChild} src={child4}></img>
                                <div className={s.subTitleChild}>
                                    Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                    have support under them.
                                    <br/> <br/>
                                    The baby's weight is completely in your hands!
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.childInThree}>
                                <div className={s.titleInCard}>
                                    “Jump, skip, skip”
                                </div>
                                <img className={s.imgChild} src={child5}></img>
                                <div className={s.subTitleChild}>
                                    Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                    have support under them.
                                    <br/> <br/>
                                    The baby's weight is completely in your hands!
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.childInThree}>
                                <div className={s.titleInCard}>
                                    “Jump, skip, skip”
                                </div>
                                <img className={s.imgChild} src={child6}></img>
                                <div className={s.subTitleChild}>
                                    Hold your baby upright by the armpits and do a jump-skip, so that the feet
                                    have support under them.
                                    <br/> <br/>
                                    The baby's weight is completely in your hands!
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <button className={s.moreExercise}>Больше упражнений в приложении</button>

                <div className={s.section4}>
                    <h3 style={{paddingTop: '60px'}}>100 000+ семей следят за развитием <br/>
                        своих малышей вместе с нами </h3>
                    <img className={s.reviewsFamily} src={famuily} alt="family"/>
                    <div className={s.reviewsComments}>
                        <div>Не нашла ни одного приложения,
                            в котором были бы расписаны недели жизни ребенка, спасибо!
                            💓😊
                            <img src={review1} alt="img"/>
                        </div>
                        <div style={{transform: 'rotateZ(-5deg)'}}>Просто спасибо!
                            Это самое важное малышковское приложение для меня.
                            <img style={{transform: 'rotateZ(5deg)'}} src={review2} alt="img"/>
                        </div>
                        <div>У меня все скачки роста сходятся. Классно знать, что ждёт на следующей неделе и как
                            поступать
                            <img src={review3} alt="img"/>
                        </div>
                    </div>
                </div>

                <div className={s.section5}>
                    <h3>
                        Ответы на частые вопросы <br/>
                        о приложении
                    </h3>
                    <div className={`accordion ${s.accordion}`} id="accordionPanelsStayOpenExample">
                        <div className={`accordion-item ${s.ownMarginAccordion}`}>
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne">
                                    Что такое скачки роста?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    С рождения и до 1,5 лет ребёнок переживает несколько кризисов роста и развития – их
                                    называют скачки роста. Не стоит их пугаться – это естественный процесс, во время
                                    которого происходит развитие нервной системы и мозга, появление новых умелок у
                                    малыша.
                                    <br/> <br/>
                                    В такие периоды ребёнок может капризничать и плохо спать – настроение чернее тучки.
                                    Поэтому важно о них знать.
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${s.ownMarginAccordion}`}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo">
                                    Почему информации в приложении можно <br/>
                                    доверять?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${s.ownMarginAccordion}`}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree">
                                    Какие есть варианты подписки?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${s.ownMarginAccordion}`}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseFour">
                                    Не могу оплатить подписку. Что делать?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <strong>This is the 4 item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className={`accordion-item ${s.ownMarginAccordion}`}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseFive">
                                    Что значит – приложение создано родителями <br/>
                                    для родителей?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <strong>This is the 5 item's accordion body.</strong> It is hidden by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <footer>
                <div className={s.container}>
                    <div className={s.firstPartFooter}>
                        <div className={s.qrCode}>
                            <img src={qrCode} className={s.qrCodeImg} alt="qrCopde"/>
                            <div>
                                Сканируйте QR-код, чтобы попробовать
                                приложение уже сегодня
                                <div className={s.subTitle}>
                                    Это бесплатно. И безопасно
                                    <a href="https://itunes.apple.com/cy/app/id1662980687/id1662980687?mt=8"><img
                                        className={s.downloadApp} src={appDownload} alt=""/></a>
                                    <a href="https://play.google.com/store/apps/details?id=happy.mom.android"><img
                                        className={s.downloadApp} src={googleplay} alt=""/></a>

                                </div>
                            </div>
                        </div>
                        <div className={s.weHaveTrust}>
                            <img className={s.bunny} src={bunny} alt="bunny"/>
                        </div>
                    </div>
                    <hr/>
                    <div className={s.underFooter}>
                        <div className={s.firstUnderFooter}>
                            <span>Скачки роста</span>
                            <div>Растём вместе. С каждым скачком.</div>
                        </div>
                        <div className={s.secondUnderFooter}>Если у вас есть вопросы о работе приложения <br/>
                            или вы хотите обсудить сотрудничество, напишите нам: <br/><a
                                href="mailto:dima@sprouty.app">dima@sprouty.app</a></div>
                        <div className={s.socials}>


                            <a href={language === "RU" ? `https://www.instagram.com/skachkirosta?igsh=MWxxbGs3cTd6ZzZwZg%3D%3D` : `https://www.instagram.com/sprouty.app?igsh=YTZwZjIyaGhubWxy`}><img
                                src={inst} alt="social"/></a>
                            <a href={language === "RU" ? `https://t.me/skachkirosta` : `https://t.me/sproutyapp`}><img
                                src={telegram} alt="social"/></a>
                        </div>

                    </div>
                    <hr style={{margin: '30px 0 40px'}}/>

                    <div className={s.lastUnderFooter}>
                        <div>© 2024 Скачки роста</div>
                        <div className={s.politics}>
                            <a href="https://sprouty.app/privacy-policy">Политика конфиденциальности </a>
                            •
                            <a href="https://sprouty.app/terms-of-service">Пользовательское соглашение</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default App;
