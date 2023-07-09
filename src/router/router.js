import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { Main } from "../components/main/main";
import  {AuthorizationPade}  from "../components/authorizationPage/authorizationPade";
import  {SearchPage}  from "../components/searchPage/searchPage";
import  {ResultPage}  from "../components/resultPage/resultPage";

export const Router = () => {
    
    return  (
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/login" element={<AuthorizationPade/>} />
                <Route path="/SearchPage" element={<SearchPage />} />
                <Route path="/ResultPage" element={<ResultPage/>} />
                <Route paht="*" element={<Navigate to="/" />} />
            </Routes>
    )

}