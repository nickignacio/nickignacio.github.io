import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/blog/first-blog-post/', 'bd7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', '359'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', 'dba'),
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
    component: ComponentCreator('/blog/welcome/', '23d'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/', 'f52'),
    exact: true
  },
  {
    path: '/cv/',
    component: ComponentCreator('/cv/', '5b2'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', 'ed8'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'ed6'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '096'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'c31'),
            routes: [
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', 'f1a'),
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
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/cc-pcm/', 'bcc'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/defect-eng/',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/defect-eng/', 'cf0'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/tem-rram/',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/tem-rram/', 'e78'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/co-reconstruction/',
                component: ComponentCreator('/docs/research/In-situ-STM/co-reconstruction/', '047'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/layer-by-layer/',
                component: ComponentCreator('/docs/research/In-situ-STM/layer-by-layer/', 'c2b'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/memristor-effect/',
                component: ComponentCreator('/docs/research/In-situ-STM/memristor-effect/', '79f'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/phase-change/',
                component: ComponentCreator('/docs/research/In-situ-STM/phase-change/', '42f'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/Materials Pedagogy/',
                component: ComponentCreator('/docs/research/Materials Pedagogy/', 'd14'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/teaching/background/',
                component: ComponentCreator('/docs/teaching/background/', '048'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/assessment_instruments/',
                component: ComponentCreator('/docs/teaching/characterization/assessment_instruments/', '6ed'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/syllabus/',
                component: ComponentCreator('/docs/teaching/characterization/syllabus/', 'e83'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/topic_overview/',
                component: ComponentCreator('/docs/teaching/characterization/topic_overview/', '5f0'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/diversity-statement/',
                component: ComponentCreator('/docs/teaching/diversity-statement/', '1a5'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/documentation-of-teaching/',
                component: ComponentCreator('/docs/teaching/documentation-of-teaching/', '7aa'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/assessment_instrument/',
                component: ComponentCreator('/docs/teaching/introMSE/assessment_instrument/', '1e3'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/learning_activities/',
                component: ComponentCreator('/docs/teaching/introMSE/learning_activities/', 'e2e'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/module_overview/',
                component: ComponentCreator('/docs/teaching/introMSE/module_overview/', '7fe'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/preamble/',
                component: ComponentCreator('/docs/teaching/preamble/', 'a88'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/teaching-philosophy/',
                component: ComponentCreator('/docs/teaching/teaching-philosophy/', '463'),
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
    component: ComponentCreator('/', '155'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
