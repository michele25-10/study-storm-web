import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//PAGES
import Presentation from './pages/presentation/Presentation';
import ConfirmRegistration from './pages/confirmRegistration/ConfirmRegistration';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermOfUse from './pages/termOfUse/TermOfUse';

import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';
import CookieConsent from './components/cookie/CookieConsent';

const App = () => {
  const [cookies] = useCookies(["statsCookies"])

  useEffect(() => {
    if (cookies.statsCookies) {
      console.log("inizializzo google analytics");
      ReactGA.initialize('G-9TNPGLQ0R6');
    }
  }, [cookies.statsCookies]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Presentation />,
    },
    {
      path: "/confirm-registration/:id",
      element: <ConfirmRegistration />,
    },
    {
      path: "/forgot-password/:id",
      element: <ForgotPassword />,
    },
    {
      path: "/privacy-policy/",
      element: <PrivacyPolicy />,
    },
    {
      path: "/term-of-use/",
      element: <TermOfUse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      {!cookies.tecnicalCookies ? <CookieConsent /> : null}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
  <App />
  /*</React.StrictMode >*/
);


