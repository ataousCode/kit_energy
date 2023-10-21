import React from "react"
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


const Info = () =>{
    return (
        <div class="row">
        <div class="col">
          <i class="bi bi-alarm"></i> 
          The segment tree is a type of data structure from computational geometry. Bentley proposed this well-known technique in 1977. A segment tree is essentially a binary tree in whose nodes we store the information about the segments of a linear data structure such as an array.
        </div>
        <div class="col"> 
          <i class="bi bi-archive"></i>  
          Donec ullamcorper nulla non metus...
        </div>
        <div class="col">
          <i class="bi bi-bar-chart-line"></i>
          Nulla vitae elit libero...
        </div>  
        <div class="col">
          <i class="bi bi-box-arrow-up-right"></i>  
          Fusce dapibus, tellus ac cursus commodo...
        </div>
      </div>
    )
}
export default Info;