import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '546'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '8a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '2da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '178'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '6e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'cab'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', 'ac2'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '1d9'),
    exact: true
  },
  {
    path: '/blog/md-blog-post/',
    component: ComponentCreator('/blog/md-blog-post/', 'f47'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', '17a'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/blog/tags/handiwork/',
    component: ComponentCreator('/blog/tags/handiwork/', 'd3a'),
    exact: true
  },
  {
    path: '/blog/tags/outings/',
    component: ComponentCreator('/blog/tags/outings/', '01e'),
    exact: true
  },
  {
    path: '/blog/Welcome/',
    component: ComponentCreator('/blog/Welcome/', '338'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/', '73d'),
    exact: true
  },
  {
    path: '/cv/',
    component: ComponentCreator('/cv/', 'e8c'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '54d'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '9b6'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'd9d'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'bcd'),
            routes: [
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', 'f1a'),
                exact: true,
                sidebar: "about"
              },
              {
                path: '/docs/category/2d-materials-for-neuromorphic-computing/',
                component: ComponentCreator('/docs/category/2d-materials-for-neuromorphic-computing/', '1d9'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/category/example-teaching-module-introduction-to-mse/',
                component: ComponentCreator('/docs/category/example-teaching-module-introduction-to-mse/', '9c8'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/category/example-teaching-module-practical-characterization-of-materials/',
                component: ComponentCreator('/docs/category/example-teaching-module-practical-characterization-of-materials/', '6a0'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/category/in-situ-stm-measurements/',
                component: ComponentCreator('/docs/category/in-situ-stm-measurements/', '3c3'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
