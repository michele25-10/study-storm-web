import React from 'react';
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
ReactGA.initialize('G-9TNPGLQ0R6');

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
  < RouterProvider router={router} />
  /*</React.StrictMode >*/
);


