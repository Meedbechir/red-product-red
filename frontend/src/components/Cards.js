import React from 'react';
import { BsEnvelopeOpen, BsPersonSquare } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';

const useDashcardsViewModel = () => {
  const content = [
    {
      number: 125,
      title: 'Formulaire',
      description: 'Je ne sais pas quoi mettre',
      icon: <BsEnvelopeOpen className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-violet-400',
    },
    {
      number: 40,
      title: 'Messages',
      description: 'Je ne sais pas quoi mettre',
      icon: <BsPersonSquare className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-teal-500',
    },
    {
      number: 600,
      title: 'Utilisateurs',
      description: 'Je ne sais pas quoi mettre',
      icon: <IoMdContacts className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-yellow-400',
    },
    {
      number: 25,
      title: 'E-mails',
      description: 'Je ne sais pas quoi mettre',
      icon: <BsEnvelopeOpen className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-red-600',
    },
    {
      number: 40,
      title: 'Hôtels',
      description: 'Je ne sais pas quoi mettre',
      icon: <BsPersonSquare className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-fuchsia-700',
    },
    {
      number: '02',
      title: 'Entités',
      description: 'Je ne sais pas quoi mettre',
      icon: <IoMdContacts className="text-2xl max-lg:text-3xl" />,
      bg: 'bg-blue-700',
    },
  ];

  return {
    content,
  };
};

const Dashcards = () => {
  const { content } = useDashcardsViewModel();

  return (
    <div class="container mt-5 pt-3 mx-0 px-0">
      <div className="d-flex justify-content-between  bg-white mx-0 px-0">
          <h3 className="mt-4 ms-5 fs-2 lead ">Bienvenue sur Red Product </h3>
      </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 mx-3">
      {content.map((item, index) => (
        <div key={index} class="col">
          <div class={`card bg-white ${item.bg}`}>
            <div class="card-body p-1">
              <div class="d-flex align-items-center">
                <span class={`text-white text-center rounded-circle p-3 ms-1  ${item.bg}`}>
                  {item.icon}
                </span>
                <div class="ms-3">
                  <div class="d-flex align-items-center">
                    <p class="text-dark text-3xl font-light">{item.number}</p>
                    <p class="text-dark text-base font-light ms-2">{item.title}</p>
                  </div>
                  <p class="text-dark text-opacity-60 text-base">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Dashcards;
