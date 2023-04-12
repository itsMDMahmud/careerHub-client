import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blog from './component/Blog/Blog';
import JobDetails from './component/JobDetails/JobDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';
import JobCatagory from './component/JobCatagory/JobCatagory';
import { customLoader } from './component/CustomLoader/CustomLoader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('CompanyData.json'),
      },
      {
        path: "job-catagory",
        element: <JobCatagory></JobCatagory>,
        // loader: () => fetch('jobcatagory.json'),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: customLoader
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "job-details/:id",
        element: <JobDetails></JobDetails>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
