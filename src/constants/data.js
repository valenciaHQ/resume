import React from 'react';
import { Briefcase } from '../components/Icons';

export default {
  skills: [
    {
      title: 'Javascript',
      additionalInfo: [
        'React',
        'es6',
        'Hooks',
        'Styled components',
        'State management',
        'Context API',
        'Firebase - React'
      ]
    },
    {
      title: 'Java',
      additionalInfo: ['Spring', 'Jpa', 'Jersey', 'Swagger', 'Spring mongoDB', 'Hibernate']
    },
    {
      title: 'Y más...',
      additionalInfo: [
        'CSS',
        'Html',
        'JSX',
        'Git',
        'Sql db',
        'Nosql db',
        'AWS',
        'Firebase: Firestore/Storage/Auth',
        'Advanced English'
      ]
    },
    {
      title: 'Próximas',
      additionalInfo: ['Node', 'UX/UI']
    }
  ],
  experience: [
    {
      range: 'Septiembre 2019 - Presente',
      title: 'React Developer',
      company: 'Park Assist',
      description:
        'Trabajando en INX, producto de gestión de estacionamiento inteligente, utilizando React (Version 16.8+ hooks + React context API) y Amplify para acceder a los AWS (IAM, Iot core, S3, entre otros)',
      location: 'Palermo, GBA',
      Icon: <Briefcase />
    },
    {
      range: 'Septiembre 2018 hasta Septiembre 2019',
      title: 'React Developer - Proyecto Nueva plataforma Aerolíneas Argentinas',
      company: 'Valtech',
      description:
        'Desarrollo react es6 en plataforma Backoffice para proyecto Aerolineas Argentinas utilizando React-actions, Redux, Formik, YUP, styled-components.',
      location: 'Ramos Mejia, GBA',
      Icon: <Briefcase />
    },
    {
      range: 'Febrero 2018 hasta Septiembre 2018',
      title: 'Software Developer - Proyecto Nueva plataforma Aerolíneas Argentinas',
      company: 'Valtech',
      description:
        'Desarrollo de micro-servicios REST utilizando springboot, spring data jpa, mongodb y jersey. Documentación de swagger utilizando API swagger-jersey. Utilización de git para control de versiones y docker para deploy de microservicios. Proyecto bajo metodologia scrum.',
      location: 'Ramos Mejia, GBA',
      Icon: <Briefcase />
    },
    {
      range: 'Octubre 2015 hasta Octubre 2016',
      title: 'Java Developer and Oracle PL SQL developer',
      company: 'Grupo Mercel S.A',
      description:
        'Mantenimiento de aplicaciones de PAMI. Análisis y desarrollo back end en migración de tecnología de sistema SIDU (mesa entrada) de ANSES.',
      location: 'Balvanera, CABA',
      Icon: <Briefcase />
    },
    {
      range: 'Abril 2014 hasta Septiembre 2015',
      title: 'Ssr-Sr Oracle PL SQL developer',
      company: 'Close Up International',
      description:
        'Análisis, desarrollo e implementación de distintos procesos generadores de reportes que eran uno de los productos finales de la empresa. Manejo de grandes volúmenes de datos. Versión Oracle 11g.',
      location: 'Palermo, CABA',
      Icon: <Briefcase />
    },
    {
      range: 'Julio 2012 hasta Abril 2014',
      title: 'Semi Senior Java/PL-SQL System Analyst and Production Support',
      company: 'Acciona IT',
      description:
        'Soporte técnico nivel 2 para aplicación c900 de riesgo crediticio para LATAM.  Resolución y control de tareas de alta criticidad. Guardias nocturnas, comunicación con usuarios de nivel 1. Generación de documentación de cambios y arreglos.',
      location: 'Martinez, GBA',
      Icon: <Briefcase />
    },
    {
      range: 'Marzo 2011 hasta Junio 2012',
      title: 'Application Support - Junior Java and Oracle Developer',
      company: 'Cognisys SRL',
      description:
        'Al principio, como analista técnico, realicé control y resolución de los issues reportados sobre el sistema de gestión técnica (SGT) en las oficinas de CLARO de San Telmo, convirtiéndome en el referente de dicha aplicación. Luego de ocho meses, me desempeñe como desarrollador Java, recibiendo capacitación en las tecnologías implicadas para el mantenimiento de SGT desde las oficinas de la empresa.',
      location: 'Palermo, CABA',
      Icon: <Briefcase />
    }
  ]
};
