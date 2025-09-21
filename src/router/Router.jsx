import ErrorPage from "@/ErrorPage";
import MainLayout from "@/layoutes/mainLayout";
import Home from "@/pages/homePages";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: '',
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    }
                ]
            }
        ]
    }
])