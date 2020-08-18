import React, { Component } from 'react';

import Img from '../../components/Imgs';
import Section from '../../components/Section';
import Footer from '../../components/Footer';


export default class Main extends Component{
    render(){
        return (
            <div>
                <Img />
                <Section />
                <Footer />
            </div>
        )
    }
}