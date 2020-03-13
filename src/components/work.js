import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Reflections.</Fade></h1>
        <div className='work-content'>
                {data.reflections.map((result)=>(
                    <Project key={result.id}
                             title = {result.title}
                             imageSrc = {result.image}
                             url={`/reflections/${result.id}`}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;