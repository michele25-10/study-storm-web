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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
  < RouterProvider router={router} />
  /*</React.StrictMode >*/
);


