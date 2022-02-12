"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/constants/index.js
const SOCIAL_NETWORK = {
  TWITTER: "https://twitter.com/advarhalla",
  GITHUB: "https://github.com/valenciaHQ",
  INSTAGRAM: "https://www.instagram.com/_alevalencia_",
  STACK_EXCHANGE: "https://stackoverflow.com/users/11295202/valenciahq",
  LINKEDLN: "https://www.linkedin.com/in/valenciaalejandro/"
};
const GITHUB_REPOSITORY = "https://github.com/valenciaHQ/Resume";
const SUCCESS_MESSAGE = "Mensaje enviado.";
const ERROR_MESSAGE = "Hubo un error enviando el mensaje";
const STATUS_TYPE = {
  ERROR: "error",
  SUCCESS: "success"
};
const DEVICE_SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};
const DEVICE = {
  mobileS: `(min-width: ${DEVICE_SIZE.mobileS})px`,
  mobileM: `(min-width: ${DEVICE_SIZE.mobileM})px`,
  mobileL: `(min-width: ${DEVICE_SIZE.mobileL})px`,
  tablet: `(min-width: ${DEVICE_SIZE.tablet})px`,
  laptop: `(min-width: ${DEVICE_SIZE.laptop})px`,
  laptopL: `(min-width: ${DEVICE_SIZE.laptopL})px`,
  desktop: `(min-width: ${DEVICE_SIZE.desktop})px`,
  desktopL: `(min-width: ${DEVICE_SIZE.desktop})px`
};
;// CONCATENATED MODULE: ./src/hooks/useDeviceSize.js



const useDeviceSize = () => {
  const {
    0: isDesktopOrLaptop,
    1: setIsDesktopOrLaptop
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth;

      if (width < DEVICE_SIZE.laptopL) {
        setIsDesktopOrLaptop(false);
      } else {
        setIsDesktopOrLaptop(true);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return {
    isDesktopOrLaptop: isDesktopOrLaptop
  };
};

/* harmony default export */ const hooks_useDeviceSize = (useDeviceSize);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(377);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Layout.js

const Row = external_styled_components_default().div.withConfig({
  displayName: "Layout__Row",
  componentId: "sc-5cmx4c-0"
})(["display:flex;"]);
const Column = external_styled_components_default().div.withConfig({
  displayName: "Layout__Column",
  componentId: "sc-5cmx4c-1"
})(["display:flex;flex-direction:column;"]);
const SectionTitle = external_styled_components_default().h3.withConfig({
  displayName: "Layout__SectionTitle",
  componentId: "sc-5cmx4c-2"
})(["text-align:center;font-size:", ";color:", ";margin:50px 0px;"], props => props.theme.fontSizes.xLarge, props => props.theme.primaryColor);
const SectionBox = external_styled_components_default()(Row).withConfig({
  displayName: "Layout__SectionBox",
  componentId: "sc-5cmx4c-3"
})(["width:", ";justify-content:center;padding:20px;box-shadow:0px 3px 10px -2px rgba(0,0,0,0.75);"], props => props.isDesktopOrLaptop && "70%");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: external "react-icons/gi"
const gi_namespaceObject = require("react-icons/gi");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Icons.js






const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Icons__Wrapper",
  componentId: "sc-hfic0k-0"
})(["", ""], ({
  onClick
}) => onClick && (0,external_styled_components_.css)(["&:hover{cursor:pointer;}"]));
const Code = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsCodeSlash, {
    size: isDesktopOrLaptop && 40
  })
});
const Copy = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bi_namespaceObject.BiCopy, {
    size: isDesktopOrLaptop && 40
  })
});
const Age = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(gi_namespaceObject.GiTimeTrap, {
    size: isDesktopOrLaptop && 40
  })
});
const Phone = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsPhone, {
    size: isDesktopOrLaptop && 40
  })
});
const Email = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiOutlineMail, {
    size: isDesktopOrLaptop && 40
  })
});
const Twitter = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsTwitter, {
    size: isDesktopOrLaptop && 32
  })
});
const Instagram = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsInstagram, {
    size: isDesktopOrLaptop && 32
  })
});
const StackOverFlow = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsStackOverflow, {
    size: isDesktopOrLaptop && 32
  })
});
const Linkedln = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsLinkedin, {
    size: isDesktopOrLaptop && 32
  })
});
const GitHub = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsGithub, {
    size: isDesktopOrLaptop && 32
  })
});
const Briefcase = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsBriefcase, {
    size: isDesktopOrLaptop && 40
  })
});
const English = ({
  onClick,
  disabled,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx("input", {
    type: "image",
    src: "/icons/united-kingdom-flag.png",
    border: "0",
    alt: "english",
    style: disabled && {
      opacity: "0.2"
    }
  })
});
const Spanish = ({
  onClick,
  isDesktopOrLaptop
}) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
  onClick: onClick,
  children: /*#__PURE__*/jsx_runtime_.jsx("input", {
    type: "image",
    src: "/icons/spain-flag.png",
    border: "0",
    alt: "spanish"
  })
});
;// CONCATENATED MODULE: ./src/components/Profile/styled.js


const styled_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-9paah1-0"
})(["position:relative;top:200px;background-color:white;box-shadow:0px 14px 20px 0px rgba(0,0,0,0.75);", ""], ({
  mobile
}) => mobile && (0,external_styled_components_.css)(["display:flex;position:static;margin:30px 0px 10px 0px;font-size:small;"]));
const Section = external_styled_components_default()(Row).withConfig({
  displayName: "styled__Section",
  componentId: "sc-9paah1-1"
})(["padding:20px;"]);
const Image = external_styled_components_default().img.withConfig({
  displayName: "styled__Image",
  componentId: "sc-9paah1-2"
})(["width:250px;", ""], ({
  mobile
}) => mobile && (0,external_styled_components_.css)(["width:100px;"]));
const Footer = external_styled_components_default()(Row).withConfig({
  displayName: "styled__Footer",
  componentId: "sc-9paah1-3"
})(["height:50px;border-top:1px solid lightgray;background-color:#04b57b;color:white;justify-content:space-around;align-items:center;"]);
const NameRow = external_styled_components_default()(Row).withConfig({
  displayName: "styled__NameRow",
  componentId: "sc-9paah1-4"
})(["font-size:", ";"], props => props.theme.fontSizes.large);
const Name = external_styled_components_default().p.withConfig({
  displayName: "styled__Name",
  componentId: "sc-9paah1-5"
})(["margin-left:5px;font-weight:bolder;color:", ";"], props => props.theme.primaryColor);
const StyledColumn = external_styled_components_default()(Column).withConfig({
  displayName: "styled__StyledColumn",
  componentId: "sc-9paah1-6"
})(["margin-right:", ";justify-content:space-around;", ""], props => props.marginRight ? props.marginRight : '0px', ({
  mobile
}) => mobile && (0,external_styled_components_.css)(["flex:1;align-items:center;padding:30px 10px;"]));
const CopiedText = external_styled_components_default()(Column).withConfig({
  displayName: "styled__CopiedText",
  componentId: "sc-9paah1-7"
})(["margin-left:20px;justify-content:center;font-size:", ";color:", ";"], props => props.theme.fontSizes.small, props => props.theme.primaryColor);
;// CONCATENATED MODULE: ./src/components/SocialRow.js
/* eslint-disable react/jsx-wrap-multilines */







const SocialRow_Wrapper = external_styled_components_default()(Row).withConfig({
  displayName: "SocialRow__Wrapper",
  componentId: "sc-pynlw0-0"
})(["flex:1;width:", ";color:", ";justify-content:space-around;"], props => props.width ? props.width : "auto", props => props.theme.colors.white);
const IconWrapper = external_styled_components_default()(Column).withConfig({
  displayName: "SocialRow__IconWrapper",
  componentId: "sc-pynlw0-1"
})([""]);

const Icon = ({
  Component
}) => /*#__PURE__*/jsx_runtime_.jsx(IconWrapper, {
  children: Component
});

const SocialRow = ({
  width,
  isDesktopOrLaptop,
  roundedWrapper
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(SocialRow_Wrapper, {
  width: width,
  children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
    Component: /*#__PURE__*/jsx_runtime_.jsx(GitHub, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      onClick: () => window.open(SOCIAL_NETWORK.GITHUB),
      roundedWrapper: roundedWrapper
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Icon, {
    Component: /*#__PURE__*/jsx_runtime_.jsx(Twitter, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      onClick: () => window.open(SOCIAL_NETWORK.TWITTER),
      roundedWrapper: roundedWrapper
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Icon, {
    Component: /*#__PURE__*/jsx_runtime_.jsx(Instagram, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      onClick: () => window.open(SOCIAL_NETWORK.INSTAGRAM),
      roundedWrapper: roundedWrapper
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Icon, {
    Component: /*#__PURE__*/jsx_runtime_.jsx(StackOverFlow, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      onClick: () => window.open(SOCIAL_NETWORK.STACK_EXCHANGE),
      roundedWrapper: roundedWrapper
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(Icon, {
    Component: /*#__PURE__*/jsx_runtime_.jsx(Linkedln, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      onClick: () => window.open(SOCIAL_NETWORK.LINKEDLN),
      roundedWrapper: roundedWrapper
    })
  })]
});

/* harmony default export */ const components_SocialRow = (SocialRow);
;// CONCATENATED MODULE: ./src/components/Profile/index.js











const Profile = () => {
  const {
    isDesktopOrLaptop
  } = hooks_useDeviceSize();
  const {
    0: copied,
    1: setCopied
  } = (0,external_react_.useState)(false);
  const mailRef = (0,external_react_.useRef)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();

  const handleCopy = () => {
    const el = document.createElement("textarea");
    el.value = mailRef.current.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  return isDesktopOrLaptop ? /*#__PURE__*/jsx_runtime_.jsx(styled_Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Column, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Image, {
          src: "/image/cv_photo.jpg",
          alt: "cv_photo"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
        style: {
          flex: 1
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Section, {
          style: {
            borderBottom: "1px solid lightgray"
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(NameRow, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Column, {
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: t("hello")
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(Column, {
                children: /*#__PURE__*/jsx_runtime_.jsx(Name, {
                  children: "ALEJANDRO VALENCIA"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                style: {
                  margin: "0px"
                },
                children: "React Developer - Software Developer - Crypto enthusiast"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Section, {
          style: {
            flex: 1
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Column, {
            style: {
              fontSize: "large",
              height: "75%"
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
              style: {
                flex: 1
              },
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledColumn, {
                marginRight: "10px",
                children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Age, {})
                }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Email, {})
                }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Phone, {})
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledColumn, {
                marginRight: "40px",
                children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: t("age")
                }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: t("email")
                }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: t("phone")
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledColumn, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: external_moment_default()().diff("1989-08-22", "years")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Row, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Column, {
                    ref: mailRef,
                    children: "alejandro.d.valencia@gmail.com"
                  }), /*#__PURE__*/jsx_runtime_.jsx(Column, {
                    style: {
                      marginLeft: "5px"
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx(Copy, {
                      onClick: handleCopy
                    })
                  }), copied && /*#__PURE__*/jsx_runtime_.jsx(CopiedText, {
                    children: `${t("copied")}!`
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
                  children: "+ 5411 40317830"
                })]
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {
          children: /*#__PURE__*/jsx_runtime_.jsx(components_SocialRow, {
            iconSize: "lg"
          })
        })]
      })]
    })
  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(styled_Wrapper, {
    mobile: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Column, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Image, {
        src: "/image/cv_photo.jpg",
        alt: "cv_photo",
        mobile: true
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledColumn, {
      mobile: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Column, {
          ref: mailRef,
          children: "alejandro.d.valencia@gmail.com"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
        children: `${external_moment_default()().diff("1989-08-22", "years")} ${t("years")}`
      }), /*#__PURE__*/jsx_runtime_.jsx(Row, {
        children: "+ 5411 40317830"
      })]
    })]
  });
};

/* harmony default export */ const components_Profile = (Profile);
;// CONCATENATED MODULE: ./src/components/Header/index.js











const Header_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1xq2cmm-0"
})(["display:flex;flex-direction:column;background-color:", ";justify-content:center;align-items:center;padding:15px 0px;", ";"], props => props.theme.colors.jade, ({
  isDesktopOrLaptop
}) => isDesktopOrLaptop && (0,external_styled_components_.css)(["padding:", ";height:", ";"], props => props.isDesktopOrLaptop && props.theme.measures.desktopPadding, props => props.isDesktopOrLaptop && "45%"));
const Title = external_styled_components_default().div.withConfig({
  displayName: "Header__Title",
  componentId: "sc-1xq2cmm-1"
})(["font-size:1.5rem;color:", ";", ""], props => props.theme.colors.white, ({
  isDesktopOrLaptop
}) => isDesktopOrLaptop && (0,external_styled_components_.css)(["position:absolute;font-size:2rem;color:", ";top:50px;left:10%;"], props => props.theme.colors.white));
const SubTitle = external_styled_components_default().div.withConfig({
  displayName: "Header__SubTitle",
  componentId: "sc-1xq2cmm-2"
})(["font-size:1rem;color:", ";", ""], props => props.theme.colors.white, ({
  isDesktopOrLaptop
}) => isDesktopOrLaptop && (0,external_styled_components_.css)(["position:absolute;font-size:1.5rem;color:", ";top:100px;left:10%;"], props => props.theme.colors.white));
const NetworkContainer = external_styled_components_default().div.withConfig({
  displayName: "Header__NetworkContainer",
  componentId: "sc-1xq2cmm-3"
})(["margin-top:30px;", ";"], ({
  isDesktopOrLaptop
}) => isDesktopOrLaptop && (0,external_styled_components_.css)(["position:absolute;top:50px;right:10%;"]));
const ActionsContainer = external_styled_components_default()(Row).withConfig({
  displayName: "Header__ActionsContainer",
  componentId: "sc-1xq2cmm-4"
})(["align-items:center;justify-content:space-around;color:white;@media ", "{margin-top:10px;}@media ", "{margin-top:30px;}"], DEVICE.mobileS, DEVICE.tablet);

const Header = () => {
  const {
    isDesktopOrLaptop
  } = hooks_useDeviceSize();
  const {
    i18n
  } = (0,external_next_i18next_.useTranslation)();

  const handleChangeLanguaje = languaje => i18n.changeLanguage(languaje);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      children: "Alejandro Valencia"
    }), /*#__PURE__*/jsx_runtime_.jsx(SubTitle, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      children: "Software Engineer"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Profile, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NetworkContainer, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_SocialRow, {
        width: isDesktopOrLaptop ? "250px" : "150px",
        isDesktopOrLaptop: isDesktopOrLaptop,
        roundedIcons: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Column, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ActionsContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Code, {
            onClick: () => window.open(GITHUB_REPOSITORY),
            isDesktopOrLaptop: isDesktopOrLaptop
          }), /*#__PURE__*/jsx_runtime_.jsx(English, {
            onClick: () => handleChangeLanguaje("en"),
            isDesktopOrLaptop: isDesktopOrLaptop
          }), /*#__PURE__*/jsx_runtime_.jsx(Spanish, {
            onClick: () => handleChangeLanguaje("es"),
            isDesktopOrLaptop: isDesktopOrLaptop
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Chip.js

/* harmony default export */ const Chip = (external_styled_components_default().div.withConfig({
  displayName: "Chip",
  componentId: "sc-udt5t1-0"
})(["display:inline-block;padding:0 25px;height:50px;font-size:", ";line-height:50px;border-radius:25px;color:white;background-color:", ";margin:8px;", ";"], props => props.theme.fontSizes.small, props => props.theme.primaryColor, ({
  english
}) => english && (0,external_styled_components_.css)(["background-color:palevioletred;"])));
;// CONCATENATED MODULE: ./src/components/Skills/index.js
/* eslint-disable react/no-array-index-key */







const TitleRow = external_styled_components_default()(Row).withConfig({
  displayName: "Skills__TitleRow",
  componentId: "sc-153237p-0"
})(["justify-content:center;align-items:center;"]);
const ChipsRow = external_styled_components_default()(Row).withConfig({
  displayName: "Skills__ChipsRow",
  componentId: "sc-153237p-1"
})(["flex-wrap:wrap;justify-content:center;"]);

const Skills = () => {
  const {
    t,
    ready
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
    style: {
      flex: 1,
      alignItems: "center"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
        children: t("skills.title")
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SectionBox, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Column, {
        children: ready && t("skills.items", {
          returnObjects: true
        }).map(({
          title,
          additionalInfo
        }, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(TitleRow, {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: title
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(ChipsRow, {
            children: additionalInfo.map((info, j) => /*#__PURE__*/jsx_runtime_.jsx(Chip, {
              english: info === "Advanced English",
              children: info
            }, j))
          })]
        }, index))
      })
    })]
  });
};

/* harmony default export */ const components_Skills = (Skills);
;// CONCATENATED MODULE: external "react-event-timeline"
const external_react_event_timeline_namespaceObject = require("react-event-timeline");
;// CONCATENATED MODULE: ./src/components/Experience/index.js
/* eslint-disable react/no-array-index-key */









const Experience = () => {
  const {
    isDesktopOrLaptop
  } = hooks_useDeviceSize();
  const {
    t,
    ready
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
    style: {
      flex: 1,
      alignItems: "center"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
        children: t("experience.title")
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SectionBox, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      children: /*#__PURE__*/jsx_runtime_.jsx(Column, {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_event_timeline_namespaceObject.Timeline, {
          style: {
            fontSize: "1rem"
          },
          children: ready && t("experience.items", {
            returnObjects: true
          }).map(({
            range,
            title,
            description,
            location
          }, index) => /*#__PURE__*/jsx_runtime_.jsx(external_react_event_timeline_namespaceObject.TimelineEvent, {
            title: title,
            createdAt: range,
            icon: /*#__PURE__*/jsx_runtime_.jsx(Briefcase, {}),
            subtitle: location,
            children:  false || description
          }, index))
        })
      })
    })]
  });
};

/* harmony default export */ const components_Experience = (Experience);
;// CONCATENATED MODULE: ./src/components/Education/index.js







const Education_Image = external_styled_components_default().img.withConfig({
  displayName: "Education__Image",
  componentId: "sc-163kwls-0"
})(["width:70px;"]);
const EntryRow = external_styled_components_default()(Row).withConfig({
  displayName: "Education__EntryRow",
  componentId: "sc-163kwls-1"
})(["margin-bottom:10px;"]);
const BoxWrapper = external_styled_components_default()(SectionBox).withConfig({
  displayName: "Education__BoxWrapper",
  componentId: "sc-163kwls-2"
})(["padding:", ";background-color:", ";"], props => props.isDesktopOrLaptop ? "0px 60px" : "0px 20px", props => props.theme.primaryColor);
const Box = external_styled_components_default()(Column).withConfig({
  displayName: "Education__Box",
  componentId: "sc-163kwls-3"
})(["padding:20px;background-color:", ";"], props => props.theme.colors.white);
const ImageWrapper = external_styled_components_default()(Column).withConfig({
  displayName: "Education__ImageWrapper",
  componentId: "sc-163kwls-4"
})(["margin-right:25px;"]);

const Education = () => {
  const {
    isDesktopOrLaptop
  } = hooks_useDeviceSize();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
    style: {
      flex: 1,
      alignItems: "center"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(Row, {
      children: /*#__PURE__*/jsx_runtime_.jsx(SectionTitle, {
        children: t("education.title")
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(BoxWrapper, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Box, {
        style: {
          flex: 1,
          padding: "20px"
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(EntryRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Education_Image, {
              src: "/image/istea.jpg",
              alt: "istea"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                fontWeight: "bold"
              },
              children: t("education.istea.name")
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: t("education.istea.career")
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: t("education.istea.status")
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EntryRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Education_Image, {
              src: "/image/utn.png",
              alt: "utn"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Column, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: t("education.utn.name")
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: t("education.utn.career")
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EntryRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Education_Image, {
              src: "/image/udemy.jpeg",
              alt: "udemy"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Column, {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: t("education.udemy_flex")
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(EntryRow, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx(Education_Image, {
              src: "/image/udemy.jpeg",
              alt: "udemy"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(Column, {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: t("education.udemy_css")
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Education = (Education);
;// CONCATENATED MODULE: ./src/components/Footer/index.js





const Footer_Wrapper = external_styled_components_default()(Column).withConfig({
  displayName: "Footer__Wrapper",
  componentId: "sc-1972h7z-0"
})(["height:100px;margin-top:30px;background-color:", ";padding-left:20px;"], props => props.theme.primaryColor);

const Footer_Footer = () => /*#__PURE__*/jsx_runtime_.jsx(Footer_Wrapper, {
  children: /*#__PURE__*/jsx_runtime_.jsx(Row, {
    style: {
      flex: 1,
      alignItems: "center"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(components_SocialRow, {
      width: "300px",
      isDesktopOrLaptop: true
    })
  })
});

/* harmony default export */ const components_Footer = (Footer_Footer);
;// CONCATENATED MODULE: ./src/components/App.js











const Container = external_styled_components_default().div.withConfig({
  displayName: "App__Container",
  componentId: "sc-1jt4d5-0"
})(["display:flex;flex-direction:column;width:100%;background-color:", ";"], props => props.theme.colors.mercury);
const App_Section = external_styled_components_default()(Row).withConfig({
  displayName: "App__Section",
  componentId: "sc-1jt4d5-1"
})(["justify-content:center;"]);
const Body = external_styled_components_default()(Column).withConfig({
  displayName: "App__Body",
  componentId: "sc-1jt4d5-2"
})(["flex:1;margin-top:", ";justify-content:center;padding:", ";"], props => props.isDesktopOrLaptop && "200px", props => props.isDesktopOrLaptop ? props.theme.measures.desktopPadding : props.theme.measures.mobilePadding);

const App = () => {
  const {
    isDesktopOrLaptop
  } = hooks_useDeviceSize();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Body, {
      isDesktopOrLaptop: isDesktopOrLaptop,
      children: [/*#__PURE__*/jsx_runtime_.jsx(App_Section, {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Skills, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(App_Section, {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Experience, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(App_Section, {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Education, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ const components_App = (App);
;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
;// CONCATENATED MODULE: ./src/pages/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Home = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      href: "favicon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: "Bienvenidos!"
    }), /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Alejandro Valencia"
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx(components_App, {})]
});

const getServerSideProps = async ({
  locale
}) => ({
  props: _objectSpread({}, await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale, ["common"]))
});
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7));
module.exports = __webpack_exports__;

})();