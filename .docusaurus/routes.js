import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '713'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8b7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '393'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'de9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e7f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '555'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '668'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '289'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '455'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '60b'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '46c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '98d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '0ce'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '333'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '5a0'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '02a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'c20'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '0c9'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'c4a'),
    exact: true
  },
  {
    path: '/cv',
    component: ComponentCreator('/cv', '71c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3a1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3e8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7ae'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '70b'),
            routes: [
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', '28e'),
                exact: true,
                sidebar: "about"
              },
              {
                path: '/docs/category/2d-materials-for-neuromorphic-computing',
                component: ComponentCreator('/docs/category/2d-materials-for-neuromorphic-computing', '904'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/category/example-teaching-module-advanced-characterization',
                component: ComponentCreator('/docs/category/example-teaching-module-advanced-characterization', '728'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/category/example-teaching-module-introduction-to-mse',
                component: ComponentCreator('/docs/category/example-teaching-module-introduction-to-mse', '636'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/category/in-situ-stm-measurements',
                component: ComponentCreator('/docs/category/in-situ-stm-measurements', '9d9'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/cc-pcm',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/cc-pcm', '015'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/defect-eng',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/defect-eng', '748'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/2d-materials-for-neuromorphic-computing/tem-rram',
                component: ComponentCreator('/docs/research/2d-materials-for-neuromorphic-computing/tem-rram', 'ebe'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/co-reconstruction',
                component: ComponentCreator('/docs/research/In-situ-STM/co-reconstruction', 'f02'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/layer-by-layer',
                component: ComponentCreator('/docs/research/In-situ-STM/layer-by-layer', '941'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/memristor-effect',
                component: ComponentCreator('/docs/research/In-situ-STM/memristor-effect', '8a2'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/In-situ-STM/phase-change',
                component: ComponentCreator('/docs/research/In-situ-STM/phase-change', '18b'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/research/Materials Pedagogy',
                component: ComponentCreator('/docs/research/Materials Pedagogy', 'bc4'),
                exact: true,
                sidebar: "research"
              },
              {
                path: '/docs/teaching/background',
                component: ComponentCreator('/docs/teaching/background', '456'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/assessment_instruments',
                component: ComponentCreator('/docs/teaching/characterization/assessment_instruments', '6cb'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/learning_activities',
                component: ComponentCreator('/docs/teaching/characterization/learning_activities', '484'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/characterization/syllabus',
                component: ComponentCreator('/docs/teaching/characterization/syllabus', '05c'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/diversity-statement',
                component: ComponentCreator('/docs/teaching/diversity-statement', '503'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/documentation-of-teaching',
                component: ComponentCreator('/docs/teaching/documentation-of-teaching', '159'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/assessment_instrument',
                component: ComponentCreator('/docs/teaching/introMSE/assessment_instrument', '6f8'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/learning_activities',
                component: ComponentCreator('/docs/teaching/introMSE/learning_activities', 'a55'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/introMSE/module_overview',
                component: ComponentCreator('/docs/teaching/introMSE/module_overview', '41b'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/preamble',
                component: ComponentCreator('/docs/teaching/preamble', '540'),
                exact: true,
                sidebar: "teaching"
              },
              {
                path: '/docs/teaching/teaching-philosophy',
                component: ComponentCreator('/docs/teaching/teaching-philosophy', '741'),
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
