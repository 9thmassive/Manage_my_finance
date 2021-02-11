import React from 'react'
import './dist/css/style.css'
import './dist/css/ld.css'
import Info from './Info'
import { Link } from 'react-router-dom'
import app from './dist/images/svg/app.svg'
import cutom_budget from './dist/images/svg/cutsom_budget.svg'
import goal from './dist/images/svg/goal.svg'
import save_smart from './dist/images/svg/save_smart.svg'
import logo from './dist/images/logo.png'

export default function LeadingPage() {
    let info = [
        {
            icon: app,
            title: ' All your money in one app',
            txt: ` See where all your money goes by
            easily adding your cash, credit
            cards, investments, and bills.`,
        },
        {
            icon: cutom_budget,
            title: ' Spend smarter and save more',
            txt: `Personalized Finance™ make
            your money go further. We’ll
            automatically find savings you
            missed.`,
        },
        {
            icon: save_smart,
            title: ' Save smarter with custom budgets',
            txt: `Start saving more today. Easily
            create your budget in Finance.
            We’ll automatically categorize
            your transactions so you don’t
            have to.`,
        },
    ]

    return (
        <>
            <div className="body-wrap">
                <header className="site-header">
                    <div className="container">
                        <div className="site-header-inner head">
                            <div className="brand header-brand">
                                <h1 className="m-0">
                                    <img
                                        className="header-logo-image log"
                                        src={logo}
                                        alt="Logo"
                                    />
                                </h1>
                            </div>
                            {/* <div className="hero-cta">
                                <a className="button ">Log in</a>
                            </div> */}
                        </div>
                    </div>
                </header>
                <main>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-inner">
                                <div className="hero-copy">
                                    <h1 className="hero-title mt-0">
                                        The easiest way to <br /> manage
                                        personal finance
                                    </h1>
                                    <p className="hero-paragraph">
                                        Reach your goals with personalized
                                        insights, custom budgets, spend
                                        tracking, and subscription
                                        monitoring—all for free
                                    </p>
                                    <div className="hero-cta">
                                        <a
                                            className="button  st"
                                            href="/registration"
                                        >
                                            Get start
                                        </a>
                                        <a className="button" href="/login">
                                            Login
                                        </a>
                                    </div>
                                </div>
                                <div className="hero-figure anime-element">
                                    <img src="https://cdn.pixabay.com/photo/2019/06/16/18/28/finance-icons-4278471_1280.png" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features section">
                        <div className="container">
                            <div className="features-inner section-inner has-bottom-divider">
                                <div className="features-wrap">
                                    {info.map(({ icon, title, txt }, index) => {
                                        return (
                                            <Info
                                                icon={icon}
                                                title={title}
                                                txt={txt}
                                                key={index}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pricing section">
                        <div className="container-sm">
                            <div className="pricing-inner section-inner">
                                <div className="pricing-header text-center">
                                    <h2 className="section-title mt-0">
                                        Unlimited for all
                                    </h2>
                                    <p className="section-paragraph mb-0">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut ad quis nostrud.
                                    </p>
                                </div>
                                <div className="pricing-tables-wrap">
                                    <div className="pricing-table">
                                        <div className="pricing-table-inner is-revealing">
                                            <div className="pricing-table-main">
                                                <div className="pricing-table-header pb-24">
                                                    <div className="pricing-table-price">
                                                        <span className="pricing-table-price-currency h2">
                                                            $
                                                        </span>
                                                        <span className="pricing-table-price-amount h1">
                                                            49
                                                        </span>
                                                        <span className="text-xs">
                                                            /month
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="pricing-table-features-title text-xs pt-24 pb-24">
                                                    What you will get
                                                </div>
                                                <ul className="pricing-table-features list-reset text-xs">
                                                    <li>
                                                        <span>
                                                            Lorem ipsum dolor
                                                            sit nisi
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Lorem ipsum dolor
                                                            sit nisi
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Lorem ipsum dolor
                                                            sit nisi
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Lorem ipsum dolor
                                                            sit nisi
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pricing-table-cta mb-8">
                                                <a
                                                    className="button button-primary button-shadow button-block"
                                                    href="#"
                                                >
                                                    Pre order now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="cta section">
                        <div className="container">
                            <div className="cta-inner section-inner">
                                <h3 className="section-title mt-0">
                                    Still not convinced on buying?
                                </h3>
                                <div className="cta-cta">
                                    <a
                                        className="button button-primary button-wide-mobile"
                                        href="/registration"
                                    >
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="site-footer">
                    <div className="container">
                        <div className="site-footer-inner">
                            <div className="brand footer-brand">
                                <a href="#">
                                    <img
                                        className="header-logo-image log"
                                        src={logo}
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                            <ul className="footer-links list-reset">
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">FAQ's</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                            <ul className="footer-social-links list-reset">
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">
                                            Facebook
                                        </span>
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                                                fill="#0270D7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">
                                            Twitter
                                        </span>
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                                                fill="#0270D7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">
                                            Google
                                        </span>
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                                                fill="#0270D7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-copyright">
                                © 2021 by Super-Team
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
