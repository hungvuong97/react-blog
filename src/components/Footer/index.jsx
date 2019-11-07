import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
// import { translate } from '../../action/translate'
import { useTranslation, Trans } from "react-i18next";

const Footer = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row gap-y align-items-center">
                    <div className="col-12 col-lg-6 offset-lg-3">
                        <ul className="nav nav-primary nav-hero">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <Trans i18nKey="key">
                                        Hung Vuong
                                    </Trans>
                                </a>
                            </li>
                            <button onClick={() => changeLanguage('ENV')}>ENV</button>
                            <button onClick={() => changeLanguage('VNI')}>VNI</button>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const mapStateToProps = state => ({
    lang: state.lang
})

// const mapDispatchToProps = dispatch =>
//     bindActionCreators(
//         {
//             translate: translate.translateLanguage
//         },
//         dispatch
//     )

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Footer);