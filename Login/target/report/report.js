$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC1.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage validation.",
  "description": "",
  "id": "homepage-validation.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Top Menu UI Validation",
  "description": "",
  "id": "homepage-validation.;top-menu-ui-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I validate the link \"\u003clinkname\u003e\" exist in top menu",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "homepage-validation.;top-menu-ui-validation;",
  "rows": [
    {
      "cells": [
        "url",
        "linkname"
      ],
      "line": 9,
      "id": "homepage-validation.;top-menu-ui-validation;;1"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Register"
      ],
      "line": 10,
      "id": "homepage-validation.;top-menu-ui-validation;;2"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Log in"
      ],
      "line": 11,
      "id": "homepage-validation.;top-menu-ui-validation;;3"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Shopping cart"
      ],
      "line": 12,
      "id": "homepage-validation.;top-menu-ui-validation;;4"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Wishlist"
      ],
      "line": 13,
      "id": "homepage-validation.;top-menu-ui-validation;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Top Menu UI Validation",
  "description": "",
  "id": "homepage-validation.;top-menu-ui-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I validate the link \"Register\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 10229985900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 21
    }
  ],
  "location": "WebShop.validateLinkTop(String)"
});
formatter.result({
  "duration": 122923100,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 643117900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Top Menu UI Validation",
  "description": "",
  "id": "homepage-validation.;top-menu-ui-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I validate the link \"Log in\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 9628262900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 21
    }
  ],
  "location": "WebShop.validateLinkTop(String)"
});
formatter.result({
  "duration": 44569600,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 1163123200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Top Menu UI Validation",
  "description": "",
  "id": "homepage-validation.;top-menu-ui-validation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I validate the link \"Shopping cart\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 8921693800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 21
    }
  ],
  "location": "WebShop.validateLinkTop(String)"
});
formatter.result({
  "duration": 53013300,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 1098239400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Top Menu UI Validation",
  "description": "",
  "id": "homepage-validation.;top-menu-ui-validation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I validate the link \"Wishlist\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 9882802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wishlist",
      "offset": 21
    }
  ],
  "location": "WebShop.validateLinkTop(String)"
});
formatter.result({
  "duration": 54475200,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 1124354000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Validate the function of following link in top menu -  Register, Login, WishList, ShoppingCart",
  "description": "",
  "id": "homepage-validation.;validate-the-function-of-following-link-in-top-menu----register,-login,-wishlist,-shoppingcart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I launch \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click the link \"\u003clink1\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I validate the Label \"\u003clabel1\u003e\" exist in register page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I navigate back the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click the link \"\u003clink2\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I validate the Label \"\u003clabel2\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I navigate back the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click the link \"\u003clink3\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate the Label \"\u003clabel3\u003e\" exist in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I navigate back the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click the link \"\u003clink4\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I validate the Label \"\u003clabel4\u003e\" exist in wishlist page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "homepage-validation.;validate-the-function-of-following-link-in-top-menu----register,-login,-wishlist,-shoppingcart;",
  "rows": [
    {
      "cells": [
        "url",
        "link1",
        "label1",
        "link2",
        "label2",
        "link3",
        "label3",
        "link4",
        "label4"
      ],
      "line": 31,
      "id": "homepage-validation.;validate-the-function-of-following-link-in-top-menu----register,-login,-wishlist,-shoppingcart;;1"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Register",
        "Register",
        "Log in",
        "Welcome, Please Sign In!",
        "Shopping cart",
        "Shopping cart",
        "Wishlist",
        "Wishlist"
      ],
      "line": 32,
      "id": "homepage-validation.;validate-the-function-of-following-link-in-top-menu----register,-login,-wishlist,-shoppingcart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Validate the function of following link in top menu -  Register, Login, WishList, ShoppingCart",
  "description": "",
  "id": "homepage-validation.;validate-the-function-of-following-link-in-top-menu----register,-login,-wishlist,-shoppingcart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click the link \"Register\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I validate the Label \"Register\" exist in register page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I navigate back the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click the link \"Log in\" exist in top menu",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I validate the Label \"Welcome, Please Sign In!\" exist in login page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I navigate back the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click the link \"Shopping cart\" exist in top menu",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate the Label \"Shopping cart\" exist in shopping cart page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I navigate back the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click the link \"Wishlist\" exist in top menu",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I validate the Label \"Wishlist\" exist in wishlist page",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 11470696700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 1971294800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelRegister(String)"
});
formatter.result({
  "duration": 1121610100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div/h1[contains (text() , \u0027Register\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JJIP4FK\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\mogan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62727}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ad95350cb569f2e0a2567ffa3b445298\n*** Element info: {Using\u003dxpath, value\u003d//div/h1[contains (text() , \u0027Register\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat POM.Register.getlblRegister(Register.java:23)\r\n\tat StepDefinitions.WebShop.validateLabelRegister(WebShop.java:117)\r\n\tat ✽.Then I validate the Label \"Register\" exist in register page(TC1.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WebShop.navigateback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShop.navigateback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelShoppingCart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShop.navigateback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wishlist",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wishlist",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelWishList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Validate the WebElements within the frame Returning Customers.",
  "description": "",
  "id": "homepage-validation.;validate-the-webelements-within-the-frame-returning-customers.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I launch \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I validate the Label \"\u003cEmail:\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I validate the Label \"\u003cPassword:\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I validate the Label \"\u003cRemember me?\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I validate the link \"\u003cForgot password?\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I validate the command button \"\u003cLog in\u003e\" enabled in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I validate textbox \"\u003cEmail\u003e\" enabled in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I validate textbox \"\u003cPassword\u003e\" enabled in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "homepage-validation.;validate-the-webelements-within-the-frame-returning-customers.;",
  "rows": [
    {
      "cells": [
        "url",
        "link",
        "Email:",
        "Password:",
        "Remember me?",
        "Forgot password?",
        "Log in",
        "Email",
        "Password"
      ],
      "line": 47,
      "id": "homepage-validation.;validate-the-webelements-within-the-frame-returning-customers.;;1"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Log in",
        "Email:",
        "Password:",
        "Remember me?",
        "Forgot password?",
        "Log in",
        "Email",
        "Password"
      ],
      "line": 48,
      "id": "homepage-validation.;validate-the-webelements-within-the-frame-returning-customers.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Validate the WebElements within the frame Returning Customers.",
  "description": "",
  "id": "homepage-validation.;validate-the-webelements-within-the-frame-returning-customers.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click the link \"Log in\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I validate the Label \"Email:\" exist in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I validate the Label \"Password:\" exist in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I validate the Label \"Remember me?\" exist in login page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I validate the link \"Forgot password?\" exist in login page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I validate the command button \"Log in\" enabled in login page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I validate textbox \"Email\" enabled in login page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I validate textbox \"Password\" enabled in login page",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 11085596700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 627143200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email:",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 286923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password:",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 22519300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Remember me?",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 13823600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div/label[contains (text() , \u0027Remember me?\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JJIP4FK\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\mogan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62753}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7138db9b488aa6065ceba46907fa6414\n*** Element info: {Using\u003dxpath, value\u003d//div/label[contains (text() , \u0027Remember me?\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat POM.Log_in.getlblRememberMeText(Log_in.java:63)\r\n\tat StepDefinitions.WebShop.validateLabelLogin(WebShop.java:102)\r\n\tat ✽.Then I validate the Label \"Remember me?\" exist in login page(TC1.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forgot password?",
      "offset": 21
    }
  ],
  "location": "WebShop.validateLinkLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 31
    }
  ],
  "location": "WebShop.validateCmdLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    }
  ],
  "location": "WebShop.validateTextboxLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 20
    }
  ],
  "location": "WebShop.validateTextboxLogin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Validate login using valid email and valid password",
  "description": "",
  "id": "homepage-validation.;validate-login-using-valid-email-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I launch \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"\u003cpassword\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I validate the link \"\u003cusername\u003e\" exist in top menu",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "homepage-validation.;validate-login-using-valid-email-and-valid-password;",
  "rows": [
    {
      "cells": [
        "url",
        "link",
        "label",
        "emailID",
        "email",
        "passwordID",
        "password"
      ],
      "line": 62,
      "id": "homepage-validation.;validate-login-using-valid-email-and-valid-password;;1"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "Log in",
        "Welcome, Please Sign In!",
        "mohan@kumar.com",
        "Email:",
        "cccccc",
        "Password:"
      ],
      "line": 63,
      "id": "homepage-validation.;validate-login-using-valid-email-and-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 63,
  "name": "Validate login using valid email and valid password",
  "description": "",
  "id": "homepage-validation.;validate-login-using-valid-email-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click the link \"Log in\" exist in top menu",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I enter \"cccccc\" in the \"Password:\" textbox in login page",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I validate the link \"\u003cusername\u003e\" exist in top menu",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 11511598200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 740396900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 1008100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 691000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cccccc",
      "offset": 9
    },
    {
      "val": "Password:",
      "offset": 25
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 528303600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 436400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 21
    }
  ],
  "location": "WebShop.validateLinkTop(String)"
});
formatter.result({
  "duration": 591700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 521400,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 734930400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"\u003cpassword\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"\u003cerror\u003e\" displayed in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;",
  "rows": [
    {
      "cells": [
        "url",
        "Email",
        "password",
        "error"
      ],
      "line": 77,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;1"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "qwe@kumar.com",
        "cccccc",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 78,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;2"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "mohan@kumar.com",
        "ddd",
        "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"
      ],
      "line": 79,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;3"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "qwe@kumar.com",
        "ddd",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 80,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;4"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "",
        "cccccc",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 81,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;5"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "mohan@kumar.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"
      ],
      "line": 82,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;6"
    },
    {
      "cells": [
        "http://demowebshop.tricentis.com/",
        "",
        "",
        "Login was unsuccessful. Please correct the errors and try again. No customer account found"
      ],
      "line": 83,
      "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 78,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"cccccc\" textbox in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"Login was unsuccessful. Please correct the errors and try again. No customer account found\" displayed in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 10288142800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clink\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 1433500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 292100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 1694700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpasswordID\u003e",
      "offset": 9
    },
    {
      "val": "cccccc",
      "offset": 31
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 290900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 815800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 16
    }
  ],
  "location": "WebShop.validateErrorLogin(String)"
});
formatter.result({
  "duration": 636200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 1255000,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 1625660300,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"ddd\" textbox in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\" displayed in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 10496901100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clink\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 539500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 241100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 1025000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpasswordID\u003e",
      "offset": 9
    },
    {
      "val": "ddd",
      "offset": 31
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 690900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 191000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect",
      "offset": 16
    }
  ],
  "location": "WebShop.validateErrorLogin(String)"
});
formatter.result({
  "duration": 257400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 192400,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 663476500,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"ddd\" textbox in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"Login was unsuccessful. Please correct the errors and try again.No customer account found\" displayed in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 9730391100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clink\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 412700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 201100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 233100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpasswordID\u003e",
      "offset": 9
    },
    {
      "val": "ddd",
      "offset": 31
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 265500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 141300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 16
    }
  ],
  "location": "WebShop.validateErrorLogin(String)"
});
formatter.result({
  "duration": 157300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 493600,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 1035454000,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"cccccc\" textbox in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"Login was unsuccessful. Please correct the errors and try again. No customer account found\" displayed in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 10451760900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clink\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 744300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 171600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 214400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpasswordID\u003e",
      "offset": 9
    },
    {
      "val": "cccccc",
      "offset": 31
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 208400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 204800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 16
    }
  ],
  "location": "WebShop.validateErrorLogin(String)"
});
formatter.result({
  "duration": 198300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 339000,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 746062300,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"\" textbox in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\" displayed in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 9765512300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clink\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 168400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 93500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 108300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpasswordID\u003e",
      "offset": 9
    },
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 244500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 230700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect",
      "offset": 16
    }
  ],
  "location": "WebShop.validateErrorLogin(String)"
});
formatter.result({
  "duration": 173400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 129300,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 645982300,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Validate login for negative path using \"Email\" and \"Password\" and validate the \"Error\" message",
  "description": "",
  "id": "homepage-validation.;validate-login-for-negative-path-using-\"email\"-and-\"password\"-and-validate-the-\"error\"-message;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 65,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I launch \"http://demowebshop.tricentis.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I click the link \"\u003clink\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I validate the Label \"\u003cwelcome\u003e\" exist in login page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I enter \"\u003cuserID\u003e\" in the \"\u003cusername\u003e\" textbox in login page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I enter \"\u003cpasswordID\u003e\" in the \"\" textbox in login page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I click the button \"\u003clogin\u003e\" in login page",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate the \"Login was unsuccessful. Please correct the errors and try again. No customer account found\" displayed in login page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I click the link \"\u003clogout\u003e\" exist in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I quit browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 10
    }
  ],
  "location": "WebShop.launchurl(String)"
});
formatter.result({
  "duration": 10126445900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clink\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 213400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cwelcome\u003e",
      "offset": 22
    }
  ],
  "location": "WebShop.validateLabelLogin(String)"
});
formatter.result({
  "duration": 203100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserID\u003e",
      "offset": 9
    },
    {
      "val": "\u003cusername\u003e",
      "offset": 27
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 133600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpasswordID\u003e",
      "offset": 9
    },
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "WebShop.enterUsernameLogin(String,String)"
});
formatter.result({
  "duration": 136800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "WebShop.clickButtonLogin(String)"
});
formatter.result({
  "duration": 139500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 16
    }
  ],
  "location": "WebShop.validateErrorLogin(String)"
});
formatter.result({
  "duration": 85700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogout\u003e",
      "offset": 18
    }
  ],
  "location": "WebShop.clickLinkTop(String)"
});
formatter.result({
  "duration": 520000,
  "status": "passed"
});
formatter.match({
  "location": "WebShop.quitbrowser()"
});
formatter.result({
  "duration": 635700000,
  "status": "passed"
});
});