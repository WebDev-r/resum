import React from 'react';
import './App.css';
import Skills from './components/skills';
import Nav from './components/nav';
import Project from './components/project';
import Table from './components/acc';
import About from './components/about';
export default class App extends React.Component {
  render() {
    return (
      <>
        <div className='fixed w-full z-50 top-[0vw]'>
          <div className='flex bg-gradient-to-r from-blue-500 to-red-500'>
            <div className='flex text-4xl ml-4'>
              <p className='text-yellow-300'>por</p>
              <p className='text-yellow-300'>Tfo</p>
              <p className='text-yellow-400'>lio</p>
            </div>
            <div className='w-full flex justify-center'>
              <Nav></Nav>
            </div>
          </div>
        </div>
        <div className='relative top-6'>
          <Skills></Skills>
        </div>
        <section id="project">
          <div className='bg-gradient-to-r from-red-200 to-yellow-300'>
            <Project></Project>
          </div>
        </section>
        <h1 className="text-center text-5xl text-yellow-500">academic</h1>
        <div className='flex justify-center'>
          <Table />
        </div>
        <section id="about">
        <About />
        </section>
      </>
    );
  }
}

