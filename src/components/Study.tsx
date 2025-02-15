import Header from "@/components/Header"
import React from "react"
import Footer from "./Footer"

import { FaJava } from "react-icons/fa"

const Study: React.FC = () => {
  return(
    <div>
      <Header/>
      <h2>スキルセット</h2>
      <div className="">
        <div className="">
          <FaJava />
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
export default Study