import react from 'react'
import Button from './Button'
import '../styles/main.css'

function Main() {
    return (
        <div className="container">
            <div className="top">
                <div className="txt">
                    <h1 id="title1">
                        Next generation digital banking
                    </h1>
                    <p id="txt1">
                        Take your financial life online. Your Easybank account<br /> will be a one stop-shop for speding
                        saving<br /> bundgeting, investing, and much more
                    </p>
                    <Button />
                </div>
                <div className="images">
                    <div className="contentImages">

                        <div className="mockup">
                            <img id="cell" width={750} src="../public/image-mockups.png" />""

                        </div>

                        <div className="bg">
                            <img id="bg" width={1100} src="../public/bg-intro-desktop.svg" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="txt2">
                    <h2 id="title2">
                        Why choose Easybank?
                    </h2>
                    <p id="txt2">
                        we leverage open banking to turn your bank account into your
                        financial hub. Control your finances like never before!
                    </p>
                </div>
                <div className="content">
                    <div className="card">
                        <img src="../public/icon-budgeting.svg" />
                        <h2 className='titleCard'>Simple Budgeting</h2>
                        <p className='contentCard'>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits</p>
                    </div>
                    <div className="card">
                        <img src="../public/icon-online.svg" />
                        <h2 className='titleCard'>Online banking</h2>
                        <p className='contentCard'>Our modern web and mobile applications allow you to keep track pf your finances wherever you are in the word</p>
                    </div>
                    <div className="card">
                        <img src="../public/icon-onboarding.svg" />
                        <h2 className='titleCard'>Fast Onboarding</h2>
                        <p className='contentCard'>We dont't do branches. Open your account in minutes online and start taking control of your finances right away</p>
                    </div>
                    <div className="card">
                        <img src="../public/icon-api.svg" />
                        <h2 className='titleCard'>Open API</h2>
                        <p className='contentCard'>Manege your savings, investments pension, and much more from one account. tracking your money has never been easier</p>
                    </div>
                </div>
            </div>
            <section className="bottom2">
                <h1 id='title3'>Latest Articles</h1>
                <div className="content2">
                    <div className="articles">
                        <img className="imgArticles" height={200} src="../public/image-currency.jpg" />
                        <div className="textArticle">
                            <p className="autor">
                                By Guilherme Cordeiro
                            </p>
                            <h1 className="titleArticle">
                                Receive money in any currency
                                with no fess
                            </h1>
                            <p className="contentArticle">
                                The world is getting smaller and
                                we're becoming more mobile. So
                                why should you be forced to only
                                receive money in a single
                            </p>
                        </div>
                    </div>
                    <div className="articles">
                        <img className="imgArticles" height={200} width={600} src="../public/image-restaurant.jpg" />
                        <div className="textArticle">
                        <p className="autor">
                                By Guilherme Cordeiro
                            </p>
                            <h1 className="titleArticle">
                                Receive money in any currency
                                with no fess
                            </h1>
                            <p className="contentArticle">
                                The world is getting smaller and
                                we're becoming more mobile. So
                                why should you be forced to only
                                receive money in a single
                            </p>
                        </div>
                    </div>
                    <div className="articles">
                        <img className="imgArticles" height={200} width={600} src="../public/image-plane.jpg" />
                        <div className="textArticle">
                        <p className="autor">
                                By Guilherme Cordeiro
                            </p>
                            <h1 className="titleArticle">
                                Receive money in any currency
                                with no fess
                            </h1>
                            <p className="contentArticle">
                                The world is getting smaller and
                                we're becoming more mobile. So
                                why should you be forced to only
                                receive money in a single
                            </p>
                        </div>
                    </div>
                    <div className="articles">
                        <img className="imgArticles" height={200} width={600} src="../public/image-confetti.jpg" />
                        <div className="textArticle">
                        <p className="autor">
                                By Guilherme Cordeiro
                            </p>
                            <h1 className="titleArticle">
                                Receive money in any currency
                                with no fess
                            </h1>
                            <p className="contentArticle">
                                The world is getting smaller and
                                we're becoming more mobile. So
                                why should you be forced to only
                                receive money in a single
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main