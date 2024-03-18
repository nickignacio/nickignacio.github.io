import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '63f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '406'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', 'c86'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '4be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '510'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '1ee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '579'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', 'b4c'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '704'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/', '48d'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', 'e0d'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', 'b5a'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', '483'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', '8c9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/', 'dec'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', '9e7'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/', '3fd'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/', 'dd1'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/', '263'),
    exact: true
  },
  {
    path: '/cv/',
    component: ComponentCreator('/cv/', '3a1'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '210'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '93d'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'b6e'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '6a7'),
            routes: [
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', '28e'),
                exact: true,
                sidebar: "about"
              },
              {
                path: '/docs/category/2d-materials-for-neuromorphic-computing/',
                component: ComponentCreator('/docs/category/2d-materials-for-neuromorphic-computing/', 'fdb'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/category/example-teaching-module-introduction-to-mse/',
                component: ComponentCreator('/docs/category/example-teaching-module-introduction-to-mse/', '478'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/category/example-teaching-module-practical-characterization-of-materials/',
                component: ComponentCreator('/docs/category/example-teaching-module-practical-characterization-of-materials/', '3bc'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/category/in-situ-stm-measurements/',
                component: ComponentCreator('/docs/category/in-situ-stm-measurements/', '243'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/cc-pcm/',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/cc-pcm/', '3fa'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/defect-eng/',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/defect-eng/', 'b66'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/tem-rram/',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/tem-rram/', '9bc'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/co-reconstruction/',
                component: ComponentCreator('/docs/research/In-situ-STM/co-reconstruction/', 'ddb'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/layer-by-layer/',
                component: ComponentCreator('/docs/research/In-situ-STM/layer-by-layer/', '822'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/memristor-effect/',
                component: ComponentCreator('/docs/research/In-situ-STM/memristor-effect/', '6f3'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/phase-change/',
                component: ComponentCreator('/docs/research/In-situ-STM/phase-change/', '031'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/Materials Pedagogy/',
                component: ComponentCreator('/docs/research/Materials Pedagogy/', 'ae8'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/teaching/background/',
                component: ComponentCreator('/docs/teaching/background/', '71b'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/assessment_instruments/',
                component: ComponentCreator('/docs/teaching/characterization/assessment_instruments/', '4b7'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/syllabus/',
                component: ComponentCreator('/docs/teaching/characterization/syllabus/', '193'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/topic_overview/',
                component: ComponentCreator('/docs/teaching/characterization/topic_overview/', '762'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/diversity-statement/',
                component: ComponentCreator('/docs/teaching/diversity-statement/', '9c1'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/documentation-of-teaching/',
                component: ComponentCreator('/docs/teaching/documentation-of-teaching/', 'd78'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/assessment_instrument/',
                component: ComponentCreator('/docs/teaching/introMSE/assessment_instrument/', '6fd'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/learning_activities/',
                component: ComponentCreator('/docs/teaching/introMSE/learning_activities/', 'e89'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/module_overview/',
                component: ComponentCreator('/docs/teaching/introMSE/module_overview/', '301'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/preamble/',
                component: ComponentCreator('/docs/teaching/preamble/', '396'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/teaching-philosophy/',
                component: ComponentCreator('/docs/teaching/teaching-philosophy/', '057'),
                exact: true,
                sidebar: "teaching"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9d8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
