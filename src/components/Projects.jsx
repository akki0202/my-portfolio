import React from 'react'
import sms from '../assets/projects/sms.png'
import csew from '../assets/projects/csew.png'
import hdp from '../assets/projects/hdp.png'

const Projects = () => {
    const projects = [
        {
            id:1,
            src:sms,
            title:'School Management System',
            href:'https://github.com/akki0202/School-Management-System.git'
        },
        {
            id:2,
            src:csew,
            title:'My-Portfolio',
            href:'https://github.com/akki0202/my-portfolio.git'
          
        },
        {
            id:3,
            src:hdp,
            title:'Chat Application',
            href:'https://github.com/akki0202/chat_application.git'
        },

    ]

  return (
    <div
    name="Projects"
    className="bg-gradient-to-r from-black via-gray-900 to-black w-full text-white font-bold md:h-screen my-11"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-white">
          Projects
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src ,href,title}) => (
          <div key={id} className="shadow-md shadow-gray-200 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
            <p className="mt-4 ml-3">{title}</p>
              <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gradient-to-r from-blue-700 to-gray-100 rounded-xl" target='_blank'
            rel ='noreferrer'>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Projects