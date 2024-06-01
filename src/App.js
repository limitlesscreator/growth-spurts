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
import review3 from '../src/img/reviewStar3.svg'
import bunny from '../src/img/bunny.png'
import inst from '../src/img/insta.png'
import telegram from '../src/img/telegram.png'
import {useState} from "react";
import  './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
                        <div  className={`${s.elemS1} ${s.marginForElem}`}>
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
                    </div>

                </div>

                <div className={s.section2}>
                    <div className={s.qrCode}>
                        <img src={qrCode} className={s.qrCodeImg} alt="qrCopde"/>
                        <div>
                            Сканируйте QR-код, чтобы попробовать
                            приложение уже сегодня
                            <div className={s.subTitle}>
                                Это бесплатно. И безопасно
                                <a href="https://itunes.apple.com/cy/app/id1662980687/id1662980687?mt=8"><img className={s.downloadApp} src={appDownload} alt=""/></a>
                                <a href="https://play.google.com/store/apps/details?id=happy.mom.android"><img className={s.downloadApp} src={googleplay} alt=""/></a>

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
                            <div style={{marginLeft: '20px'}}><b>4.8</b> GooglePlay </div>
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop: '120px'}}>Растём вместе. <br/>
                    С каждым скачком</h3>

                <div className={s.section3}>
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="swiper"
                    >
                        <SwiperSlide className={s.elemSlide}>
                            <div className={s.leftSlideText}>Календарь <br/>
                                скачков роста</div>
                            <div>
                                <img className={s.phoneSlide} src={phoneFirstSlide} alt="phone"/>
                            </div>
                            <div className={s.secondTextSlide}>Показываем скачки роста в календаре и вместе с педиатрами рассказываем, что происходит с малышом до 78 недели. </div>
                        </SwiperSlide>
                        <SwiperSlide className={s.elemSlide}>
                            <div className={s.leftSlideText}>Календарь <br/>
                                скачков роста</div>
                            <div>
                                <img className={s.phoneSlide} src={phoneFirstSlide} alt="phone"/>
                            </div>
                            <div className={s.secondTextSlide}>Показываем скачки роста в календаре и вместе с педиатрами рассказываем, что происходит с малышом до 78 недели. </div>

                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
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
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet have support under them.
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
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet have support under them.
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
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet have support under them.
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
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet have support under them.
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
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet have support under them.
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
                                            Hold your baby upright by the armpits and do a jump-skip, so that the feet have support under them.
                                            <br/> <br/>
                                            The baby's weight is completely in your hands!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className={`carousel-control-prev ${s.ownStyleForLeftCarousel}`} type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className={`carousel-control-next ${s.ownStyleForRightCarousel}`} type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <button className={s.moreExercise}>Больше упражнений в приложении </button>

                <div className={s.section4}>
                    <h3 style={{paddingTop: '60px'}}>100 000+ семей следят за развитием <br/>
                        своих малышей вместе с нами  </h3>
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
                                    С рождения и до 1,5 лет ребёнок переживает несколько кризисов роста и развития – их называют скачки роста. Не стоит их пугаться – это естественный процесс, во время которого происходит развитие нервной системы и мозга, появление новых умелок у малыша.
<br/> <br/>
                                    В такие периоды ребёнок может капризничать и плохо спать – настроение чернее тучки. Поэтому важно о них знать.
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
                                    <a href="https://itunes.apple.com/cy/app/id1662980687/id1662980687?mt=8"><img className={s.downloadApp} src={appDownload} alt=""/></a>
                                    <a href="https://play.google.com/store/apps/details?id=happy.mom.android"><img className={s.downloadApp} src={googleplay} alt=""/></a>

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
                            <div>Растём вместе. С каждым скачком.   </div>
                        </div>
                        <div className={s.secondUnderFooter}>Если у вас есть вопросы о работе приложения <br/>
                            или вы хотите обсудить сотрудничество, напишите нам: <br/><a href="mailto:dima@sprouty.app">dima@sprouty.app</a></div>
                        <div className={s.socials}>


                            <a  href={language === "RU" ? `https://www.instagram.com/skachkirosta?igsh=MWxxbGs3cTd6ZzZwZg%3D%3D` : `https://www.instagram.com/sprouty.app?igsh=YTZwZjIyaGhubWxy`} ><img src={inst} alt="social"/></a>
                            <a href={language === "RU" ? `https://t.me/skachkirosta` : `https://t.me/sproutyapp`}><img src={telegram} alt="social"/></a>
                        </div>

                    </div>
                    <hr style={{margin: '30px 0 40px'}}/>

                    <div className={s.lastUnderFooter}>
                        <div>© 2024 Скачки роста</div>
                        <div className={s.politics}>
                            <a href="https://sprouty.app/privacy-policy">Политика конфиденциальности    </a>
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
